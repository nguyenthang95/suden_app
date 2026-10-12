import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment';

export interface OrderEmailData {
  orderId: string;
  orderDate: string;
  customerName: string;
  customerPhone: string;
  shippingAddress: string;
  orderNote?: string;
  paymentMethod: string;
  items: Array<{
    name: string;
    quantity: number;
    price: number;
  }>;
  subtotal: number;
  shippingFee: number;
  total: number;
}

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  async sendNewOrderNotification(order: OrderEmailData): Promise<void> {
    const config = environment.emailJs;

    if (
      !config.serviceId ||
      !config.templateId ||
      !config.publicKey ||
      config.serviceId === 'YOUR_SERVICE_ID' ||
      config.templateId === 'YOUR_TEMPLATE_ID' ||
      config.publicKey === 'YOUR_PUBLIC_KEY'
    ) {
      throw new Error('EmailJS configuration is missing.');
    }

    const currency = (amount: number): string => `${amount.toLocaleString('vi-VN')} ₫`;

    const orderItems = order.items
      .map(
        (item, index) =>
          `${index + 1}. ${item.name}\n` +
          `   Số lượng: ${item.quantity}\n` +
          `   Đơn giá: ${currency(item.price)}\n` +
          `   Thành tiền: ${currency(item.price * item.quantity)}`,
      )
      .join('\n\n');

    const templateParams = {
      order_id: order.orderId,
      order_date: order.orderDate,
      customer_name: order.customerName,
      customer_phone: order.customerPhone,
      shipping_address: order.shippingAddress,
      order_note: order.orderNote?.trim() || 'Không có',
      payment_method: order.paymentMethod,
      order_items: orderItems,
      subtotal: currency(order.subtotal),
      shipping_fee: currency(order.shippingFee),
      total: currency(order.total),
    };

    await emailjs.send(config.serviceId, config.templateId, templateParams, {
      publicKey: config.publicKey,
      limitRate: {
        id: 'suden-order-notification',
        throttle: 10000,
      },
    });
  }
}
