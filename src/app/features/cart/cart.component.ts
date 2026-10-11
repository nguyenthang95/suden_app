import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../core/services/cart.service';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import { CartItem } from '../../core/models/models';

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink, TranslatePipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  private _cart = inject(CartService);


  get cartItems(): CartItem[] { 
    return this._cart.cartItems();
  }

  onSetQuantity(productId: string, qty: number) {
    this._cart.setQuantity(productId, qty);
  }

  onRemove(productId: string) {
    this._cart.remove(productId);
  }

  onClear() {
    this._cart.clear();
  }

  cartSubtotal = () => this._cart.cartSubtotal();
  cartTotal = () => this._cart.cartTotal();
}
