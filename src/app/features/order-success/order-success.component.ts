import { Component, inject, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OrderService } from '../../core/services/order.service';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
@Component({
  standalone: true,
  imports: [RouterLink, TranslatePipe],
  templateUrl: './order-success.component.html',
  styleUrl: './order-success.component.css',
})
export class OrderSuccessComponent {
  private s = inject(OrderService);
  order = computed(() => this.s.getById(sessionStorage.getItem('last_order_id') ?? ''));
}
