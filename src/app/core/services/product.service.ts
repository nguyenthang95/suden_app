import { Injectable, signal } from '@angular/core';
import { Product, ProductQuery, PagedResult } from '../models/models';
import { PRODUCTS } from '../mock/products.mock';
@Injectable({ providedIn: 'root' })
export class ProductService {
  private data = signal<Product[]>(structuredClone(PRODUCTS));
  products = this.data.asReadonly();

  getProducts() {
    return this.data.asReadonly();
  }

  getProductById(id: string) {
    return this.data().find((x) => x.id === id);
  }
  
  getProductsByCategory(id: string) {
    return this.data().filter((x) => x.categoryId === id && x.status === 'ACTIVE');
  }

  searchProducts(k: string) {
    const q = k.toLowerCase();
    return this.data().filter(
      (x) =>
        x.status === 'ACTIVE' &&
        (x.name.toLowerCase().includes(q) || x.sku.toLowerCase().includes(q)),
    );
  }

  query(q: ProductQuery): PagedResult<Product> {
    let xs = this.data().filter((x) => x.status === 'ACTIVE');
    if (q.search) {
      const s = q.search.toLowerCase();
      xs = xs.filter((x) => x.name.toLowerCase().includes(s) || x.sku.toLowerCase().includes(s));
    }
    if (q.category) xs = xs.filter((x) => x.categoryId === q.category);
    switch (q.sort) {
      case 'price_asc':
        xs.sort((a, b) => (a.salePrice ?? a.price) - (b.salePrice ?? b.price));
        break;
      case 'price_desc':
        xs.sort((a, b) => (b.salePrice ?? b.price) - (a.salePrice ?? a.price));
        break;
      case 'name_asc':
        xs.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'newest':
        xs.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
        break;
      default:
        xs.sort((a, b) => Number(b.featured) - Number(a.featured));
    }
    const page = q.page ?? 1,
      size = q.pageSize ?? 12;
    return {
      items: xs.slice((page - 1) * size, page * size),
      total: xs.length,
      page,
      pageSize: size,
    };
  }

  createProduct(p: Product) {
    this.data.update((x) => [p, ...x]);
    return p;
  }

  updateProduct(id: string, p: Partial<Product>) {
    this.data.update((xs) =>
      xs.map((x) => (x.id === id ? { ...x, ...p, updatedAt: new Date().toISOString() } : x)),
    );
  }

  deleteProduct(id: string) {
    this.data.update((xs) => xs.filter((x) => x.id !== id));
  }

  toggleStatus(id: string) {
    this.data.update((xs) =>
      xs.map((x) =>
        x.id === id ? { ...x, status: x.status === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE' } : x,
      ),
    );
  }
  
  toggleFeatured(id: string) {
    this.data.update((xs) => xs.map((x) => (x.id === id ? { ...x, featured: !x.featured } : x)));
  }
}
