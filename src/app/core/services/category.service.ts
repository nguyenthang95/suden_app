import { Injectable, signal, computed } from '@angular/core';
import { Category } from '../models/models';
import { CATEGORIES } from '../mock/categories.mock';
import { PRODUCTS } from '../mock/products.mock';
@Injectable({ providedIn: 'root' })
export class CategoryService {
  private data = signal<Category[]>(structuredClone(CATEGORIES));
  categories = computed(() => this.data());
  getCategories() {
    return this.data.asReadonly();
  }
  getCategoryById(id: string) {
    return this.data().find((x) => x.id === id);
  }
  getChildCategories(id: string) {
    return this.data().filter((x) => x.parentId === id);
  }
  getRootCategories() {
    return this.data().filter((x) => !x.parentId);
  }
  createCategory(c: Category) {
    this.data.update((x) => [...x, c]);
    return c;
  }
  updateCategory(id: string, c: Partial<Category>) {
    this.data.update((xs) =>
      xs.map((x) => (x.id === id ? { ...x, ...c, updatedAt: new Date().toISOString() } : x)),
    );
  }
  deleteCategory(id: string) {
    if (PRODUCTS.some((p) => p.categoryId === id) || this.getChildCategories(id).length)
      return false;
    this.data.update((xs) => xs.filter((x) => x.id !== id));
    return true;
  }
  toggleStatus(id: string) {
    this.data.update((xs) =>
      xs.map((x) =>
        x.id === id ? { ...x, status: x.status === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE' } : x,
      ),
    );
  }
}
