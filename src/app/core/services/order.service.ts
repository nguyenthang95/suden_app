import { Injectable, signal } from '@angular/core';
import { Order, OrderStatus, ShippingAddress } from '../models/models';
import { ORDERS } from '../mock/orders.mock';
import { StorageService } from './storage.service';
import { CartService } from './cart.service';
@Injectable({ providedIn: 'root' })
export class OrderService {
  private data = signal<Order[]>([...ORDERS]);
  orders = this.data.asReadonly();
  constructor(
    private storage: StorageService,
    private cart: CartService,
  ) {
    const saved = this.storage.get<Order[]>('orders', []);
    if (saved.length) this.data.set(saved);
  }
  createOrder(
    customerId: string,
    address: ShippingAddress,
    payment: 'COD' | 'BANK_TRANSFER',
    note = '',
  ) {
    const now = new Date();
    const code = `ORD-${now.toISOString().slice(0, 10).replaceAll('-', '')}-${Math.floor(1000 + Math.random() * 9000)}`;
    const items = this.cart
      .cartItems()
      .map((x) => ({
        productId: x.productId,
        productName: x.product.name,
        productImage: x.product.images[0]?.url,
        price: x.price,
        quantity: x.quantity,
        subtotal: x.subtotal,
      }));
    const subtotal = this.cart.cartSubtotal(),
      shippingFee = 30000,
      order: Order = {
        id: `o-${Date.now()}`,
        orderCode: code,
        customerId,
        customerName: address.fullName,
        customerPhone: address.phone,
        items,
        subtotal,
        shippingFee,
        discount: 0,
        total: subtotal + shippingFee,
        paymentMethod: payment,
        status: 'PENDING',
        shippingAddress: address,
        note,
        createdAt: now.toISOString(),
        updatedAt: now.toISOString(),
      };
    this.data.update((x) => [order, ...x]);
    this.storage.set('orders', this.data());
    this.cart.clear();
    return order;
  }
  getById(id: string) {
    return this.data().find((x) => x.id === id || x.orderCode === id);
  }
  updateStatus(id: string, status: OrderStatus) {
    const current = this.getById(id);
    if (!current) return false;
    const valid =
      (current.status === 'PENDING' && ['CONFIRMED', 'CANCELLED'].includes(status)) ||
      (current.status === 'CONFIRMED' && status === 'SHIPPING') ||
      (current.status === 'SHIPPING' && status === 'COMPLETED');
    if (!valid) return false;
    this.data.update((xs) =>
      xs.map((x) => (x.id === id ? { ...x, status, updatedAt: new Date().toISOString() } : x)),
    );
    this.storage.set('orders', this.data());
    return true;
  }
}
