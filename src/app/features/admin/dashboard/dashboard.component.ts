import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardService } from '../../../core/services/dashboard.service';
import { OrderService } from '../../../core/services/order.service';
import { TranslatePipe } from '../../../shared/pipes/translate.pipe';
@Component({
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class AdminDashboardComponent {
  private d = inject(DashboardService);
  orders = inject(OrderService);
  stats = this.d.stats;
}
