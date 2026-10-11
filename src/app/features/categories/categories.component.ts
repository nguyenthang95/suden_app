import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../../core/services/category.service';
import { CategoryCardComponent } from '../../shared/components/category-card/category-card.component';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
@Component({
  standalone: true,
  imports: [CommonModule, CategoryCardComponent, TranslatePipe],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent {
  private _categoryService = inject(CategoryService);

  roots = computed(() => this._categoryService.getRootCategories());
  children = (id: string) => this._categoryService.getChildCategories(id);
}
