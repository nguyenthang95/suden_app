import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../core/services/product.service';
import { CategoryService } from '../../../core/services/category.service';
import { ProductCardComponent } from '../../../shared/components/product-card/product-card.component';
import { TranslatePipe } from '../../../shared/pipes/translate.pipe';
@Component({
  standalone: true,
  imports: [CommonModule, ProductCardComponent, TranslatePipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  // Injecting the required services and modules
  private _ps = inject(ProductService);
  private _cs = inject(CategoryService);
  private _route = inject(ActivatedRoute);
  private _router = inject(Router);

  search = signal('');
  category = signal('');
  sort = signal('featured');
  page = signal(1);
  categories = computed(() =>
    this._cs
      .getCategories()()
      .filter((x) => x.status === 'ACTIVE'),
  );
  result = computed(() =>
    this._ps.query({
      search: this.search(),
      category: this.category(),
      sort: this.sort() as any,
      page: this.page(),
      pageSize: 12,
    }),
  );

  constructor() {
    this._route.queryParams.subscribe((p) => {
      this.search.set(p['search'] ?? '');
      this.category.set(p['category'] ?? '');
      this.sort.set(p['sort'] ?? 'featured');
      this.page.set(Number(p['page'] ?? 1));
    });
  }

  update(k: string, v: string) {
    this._router.navigate([], {
      relativeTo: this._route,
      queryParams: { [k]: v, page: k === 'page' ? v : 1 },
      queryParamsHandling: 'merge',
    });
  }

  go(p: number) {
    this.update('page', String(p));
  }
}
