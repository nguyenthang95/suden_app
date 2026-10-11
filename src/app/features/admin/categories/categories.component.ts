import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CategoryService } from '../../../core/services/category.service';
import { Category } from '../../../core/models/models';
import { TranslatePipe } from '../../../shared/pipes/translate.pipe';
import { TranslationService } from '../../../core/services/translation.service';
@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslatePipe],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class AdminCategoriesComponent {
  service = inject(CategoryService);
  private readonly translationService = inject(TranslationService);
  private fb = inject(FormBuilder);
  editing = signal<string | null>(null);
  formVisible = signal(false);
  form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    slug: ['', Validators.required],
    parentId: [null as string | null],
    description: [''],
    status: ['ACTIVE' as 'ACTIVE' | 'INACTIVE'],
  });
  edit(c: Category) {
    this.editing.set(c.id);
    this.formVisible.set(true);
    this.form.patchValue(c);
  }
  save() {
    if (this.form.invalid) return;
    const v = this.form.getRawValue();
    this.editing()
      ? this.service.updateCategory(this.editing()!, v)
      : this.service.createCategory({
          ...v,
          id: `cat-${Date.now()}`,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          imageUrl:
            'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80',
          productCount: 0,
        });
    this.formVisible.set(false);
  }
  remove(c: Category) {
    if (!this.service.deleteCategory(c.id))
      alert(this.translationService.translate('messages.cannotDeleteCategory'));
  }
}
