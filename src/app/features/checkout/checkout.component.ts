import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../../core/services/cart.service';
import { AuthService } from '../../core/services/auth.service';
import { OrderService } from '../../core/services/order.service';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslatePipe],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent {
  private fb = inject(FormBuilder);
  cart = inject(CartService);
  private auth = inject(AuthService);
  private orders = inject(OrderService);
  private router = inject(Router);
  processing = signal(false);
  error = signal('');
  form = this.fb.nonNullable.group({
    fullName: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    province: ['', [Validators.required]],
    district: ['', [Validators.required]],
    ward: ['', [Validators.required]],
    address: ['', [Validators.required]],
    note: [''],
    payment: ['COD' as 'COD' | 'BANK_TRANSFER', [Validators.required]],
  });
  submit() {
    if (!this.cart.cartItems().length) return this.error.set('messages.cartCannotBeEmpty');
    const u = this.auth.getCurrentUser();
    if (!u) return;
    this.processing.set(true);
    setTimeout(() => {
      const v = this.form.getRawValue();
      const o = this.orders.createOrder(u.id, v, v.payment, v.note);
      sessionStorage.setItem('last_order_id', o.id);
      this.router.navigate(['/order-success']);
    }, 500);
  }
}
