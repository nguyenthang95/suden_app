import { Injectable, signal, computed } from '@angular/core';
import { CartItem, Product } from '../models/models';
import { StorageService } from './storage.service';

@Injectable({ providedIn: 'root' })
export class CartService {
  cartCount = computed(() => this.items().reduce((n, x) => n + x.quantity, 0));
  cartSubtotal = computed(() => this.items().reduce((n, x) => n + x.subtotal, 0));
  cartTotal = computed(() => this.cartSubtotal() + (this.cartSubtotal() ? 0 : 0));
  private items = signal<CartItem[]>([]);
  cartItems = this.items.asReadonly();

  constructor(private _storageService: StorageService) {
    this.items.set(this._storageService.get<CartItem[]>('cart', []));
  }

  private save() {
    this._storageService.set('cart', this.items());
  }
  add(product: Product, quantity = 1) {
    if (product.status !== 'ACTIVE' || product.stock < 1) return false;
    this.items.update((xs) => {
      const found = xs.find((x) => x.productId === product.id);
      if (found) {
        found.quantity = Math.min(product.stock, found.quantity + quantity);
        found.subtotal = found.quantity * found.price;
        return [...xs];
      }
      const price = product.salePrice ?? product.price;
      return [
        ...xs,
        {
          productId: product.id,
          product,
          quantity: Math.min(quantity, product.stock),
          price,
          subtotal: price * Math.min(quantity, product.stock),
        },
      ];
    });
    this.save();
    return true;
  }
  setQuantity(id: string, q: number) {
    this.items.update((xs) =>
      xs.map((x) =>
        x.productId === id
          ? {
              ...x,
              quantity: Math.max(1, Math.min(q, x.product.stock)),
              subtotal: Math.max(1, Math.min(q, x.product.stock)) * x.price,
            }
          : x,
      ),
    );
    this.save();
  }
  remove(id: string) {
    this.items.update((xs) => xs.filter((x) => x.productId !== id));
    this.save();
  }
  clear() {
    this.items.set([]);
    this.save();
  }
}
