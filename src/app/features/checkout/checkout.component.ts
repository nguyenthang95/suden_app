import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CartService } from '../../core/services/cart.service';
import { AuthService } from '../../core/services/auth.service';
import { OrderService } from '../../core/services/order.service';
import { EmailService } from '../../core/services/email.services';
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
  private emailService = inject(EmailService);

  processing = signal(false);
  error = signal('');
  emailWarning = signal('');

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

  async submit(): Promise<void> {
    if (this.processing()) return;

    this.error.set('');
    this.emailWarning.set('');

    if (!this.cart.cartItems().length) {
      this.error.set('messages.cartCannotBeEmpty');
      return;
    }

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const user = this.auth.getCurrentUser();

    if (!user) {
      return;
    }

    this.processing.set(true);

    try {
      const value = this.form.getRawValue();

      // Create and save the order first.
      const order = this.orders.createOrder(user.id, value, value.payment, value.note);

      // Keep the order ID for the success page.
      sessionStorage.setItem('last_order_id', order.id);

      // Prepare the email data and send the notification to the shop.
      const contentEmail = {
        orderId: order.id,
        orderDate: new Date().toLocaleString('vi-VN'),
        customerName: value.fullName,
        customerPhone: value.phone,
        shippingAddress: [value.address, value.ward, value.district, value.province]
          .filter(Boolean)
          .join(', '),
        orderNote: value.note,
        paymentMethod:
          value.payment === 'COD' ? 'Thanh toán khi nhận hàng (COD)' : 'Chuyển khoản ngân hàng',
        items: order?.items.map((item: any) => ({
          name: item?.productName ?? 'Sản phẩm',
          quantity: item.quantity ?? 1,
          price: Number(item.price ?? item.product?.price ?? 0),
        })),
        subtotal: order?.items.reduce(
          (sum: number, item: any) =>
            sum + Number(item.price ?? item.product?.price ?? 0) * Number(item.quantity ?? 1),
          0,
        ),
        shippingFee: 0,
        total: order?.items.reduce(
          (sum: number, item: any) =>
            sum + Number(item.price ?? item.product?.price ?? 0) * Number(item.quantity ?? 1),
          0,
        ),
      };

      // Send the notification to the shop.
      // Email failure must not invalidate the saved order.
      try {
        await this.emailService.sendNewOrderNotification(contentEmail);
      } catch (emailError) {
        console.error('Failed to send order notification email:', emailError);

        this.emailWarning.set('Đặt hàng thành công nhưng chưa gửi được email thông báo cho shop.');
      }

      await this.router.navigate(['/order-success']);
    } catch (submitError) {
      console.error('Failed to create order:', submitError);
      this.error.set('Không thể tạo đơn hàng. Vui lòng thử lại.');
    } finally {
      this.processing.set(false);
    }
  }
}
