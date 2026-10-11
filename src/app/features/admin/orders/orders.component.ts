import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { OrderService } from '../../../core/services/order.service';
import { TranslatePipe } from '../../../shared/pipes/translate.pipe';
import { TranslationService } from '../../../core/services/translation.service';
@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css',
})
export class AdminOrdersComponent {
  service = inject(OrderService);
  private readonly translationService = inject(TranslationService);

  change(id: string, status: string) {
    if (!this.service.updateStatus(id, status as any)) {
      alert(this.translationService.translate('messages.invalidStatusTransition'));
    }
  }
}
