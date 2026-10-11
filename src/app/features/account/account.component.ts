import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { OrderService } from '../../core/services/order.service';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
@Component({
  standalone: true,
  imports: [CommonModule, RouterLink, TranslatePipe],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
})
export class AccountComponent {
  auth = inject(AuthService);
  private orders = inject(OrderService);
  myOrders = computed(() =>
    this.orders.orders().filter((x) => x.customerId === this.auth.user()?.id),
  );
  spent = computed(() => this.myOrders().reduce((n, x) => n + x.total, 0));
  logout() {
    this.auth.logout();
    location.href = '/';
  }
}
