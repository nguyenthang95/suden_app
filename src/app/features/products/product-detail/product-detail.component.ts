import { Component, inject, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../../../core/services/product.service';
import { CartService } from '../../../core/services/cart.service';
import { ProductCardComponent } from '../../../shared/components/product-card/product-card.component';
import { TranslatePipe } from '../../../shared/pipes/translate.pipe';

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink, ProductCardComponent, TranslatePipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  private _route = inject(ActivatedRoute);
  private _ps = inject(ProductService);
  private _cart = inject(CartService);
  
  id = this._route.snapshot.paramMap.get('id')!;
  product = computed(() => this._ps.getProductById(this.id));
  related = computed(() =>
    this._ps
      .getProductsByCategory(this.product()?.categoryId ?? '')
      .filter((x) => x.id !== this.id)
      .slice(0, 4),
  );
  selected = signal(0);
  qty = signal(1);
  add() {
    const p = this.product();
    if (p) this._cart.add(p, this.qty());
  }
}
