import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../core/services/product.service';
import { CategoryService } from '../../../core/services/category.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Product } from '../../../core/models/models';
import {
  ImageUploader,
  ImageUploadItem,
} from '../../../shared/components/image-uploader/image-uploader';
import { TranslatePipe } from '../../../shared/pipes/translate.pipe';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ImageUploader, TranslatePipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class AdminProductsComponent implements OnInit {
  service = inject(ProductService);

  private cs = inject(CategoryService);

  private fb = inject(FormBuilder);

  search = signal('');

  editing = signal<string | undefined>(undefined);

  cats = this.cs.categories;

  /**
   * Product images
   */
  images: ImageUploadItem[] = [];

  /**
   * Product form
   */
  form = this.fb.nonNullable.group({
    name: ['', Validators.required],

    sku: ['', Validators.required],

    categoryId: ['', Validators.required],

    price: [0, [Validators.required, Validators.min(1)]],

    salePrice: [0],

    stock: [0, [Validators.min(0)]],

    description: [''],
  });

  constructor() {}

  ngOnInit() {}

  /**
   * Filter products
   */
  filtered = () => {
    const s = this.search().trim().toLowerCase();

    return this.service
      .products()
      .filter((x) => !s || x.name.toLowerCase().includes(s) || x.sku.toLowerCase().includes(s));
  };

  /**
   * Create new product
   */
  newProduct(): void {
    this.editing.set('new');

    this.form.reset({
      name: '',
      sku: '',
      categoryId: '',
      price: 0,
      salePrice: 0,
      stock: 0,
      description: '',
    });

    /**
     * Reset product images
     */
    this.images = [];

    this.form.markAsPristine();
    this.form.markAsUntouched();
  }

  /**
   * Edit product
   */
  edit(p: Product): void {
    this.editing.set(p.id);

    this.form.patchValue({
      name: p.name,
      sku: p.sku,
      categoryId: p.categoryId,
      price: p.price,
      salePrice: p.salePrice ?? 0,
      stock: p.stock,
      description: p.description ?? '',
    });

    /**
     * Load existing images
     *
     * Important:
     * Clone the array so modifying uploader state
     * does not directly modify the product object.
     */
    this.images = p.images ? [...p.images] : [];

    this.form.markAsPristine();
    this.form.markAsUntouched();
  }

  /**
   * Save product
   */
  save(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const v = this.form.getRawValue();

    /**
     * Get category
     */
    const c = this.cs.getCategoryById(v.categoryId);

    if (!c) {
      return;
    }

    /**
     * Get current images
     */
    const productImages = [...this.images];

    /**
     * Create
     */
    if (this.editing() === 'new') {
      const p: Product = {
        ...v,

        id: `p-${Date.now()}`,

        slug: v.name.toLowerCase().trim().replace(/\s+/g, '-'),

        categoryName: c.name,

        salePrice: v.salePrice || undefined,

        /**
         * Save uploaded images
         */
        images: productImages,

        featured: false,

        status: 'ACTIVE',

        createdAt: new Date().toISOString(),

        updatedAt: new Date().toISOString(),
      };

      this.service.createProduct(p);
    }

    /**
     * Update
     */
    else {
      this.service.updateProduct(this.editing()!, {
        ...v,

        categoryName: c.name,

        salePrice: v.salePrice || undefined,

        /**
         * Save updated images
         */
        images: productImages,

        updatedAt: new Date().toISOString(),
      });
    }

    /**
     * Close form
     */
    this.editing.set(undefined);

    /**
     * Clear image state
     */
    this.images = [];

    /**
     * Reset form
     */
    this.form.reset({
      name: '',
      sku: '',
      categoryId: '',
      price: 0,
      salePrice: 0,
      stock: 0,
      description: '',
    });
  }

  /**
   * Image uploader changed
   */
  onImagesChange(images: ImageUploadItem[]): void {
    this.images = [...images];
  }

  /**
   * Image removed
   */
  onImageRemoved(image: ImageUploadItem): void {
    this.images = this.images.filter((x) => x.id !== image.id);

    console.log('Removed:', image);
  }

  /**
   * Primary image changed
   */
  onPrimaryChanged(image: ImageUploadItem): void {
    this.images = this.images.map((x) => ({
      ...x,
      isPrimary: x.id === image.id,
    }));

    console.log('Primary:', image);
  }

  /**
   * Image validation error
   */
  onImageError(message: string): void {
    console.error('Image upload error:', message);
  }

  /**
   * Cancel editing
   */
  cancelEdit(): void {
    this.editing.set(undefined);

    this.images = [];

    this.form.reset({
      name: '',
      sku: '',
      categoryId: '',
      price: 0,
      salePrice: 0,
      stock: 0,
      description: '',
    });
  }
}
