import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerService } from '../../../core/services/customer.service';
import { TranslatePipe } from '../../../shared/pipes/translate.pipe';
@Component({
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css',
})
export class AdminCustomersComponent {
  service = inject(CustomerService);
  search = signal('');
  filtered = () => {
    const q = this.search().toLowerCase();
    return this.service
      .customers()
      .filter(
        (x) =>
          !q ||
          x.name.toLowerCase().includes(q) ||
          x.email.toLowerCase().includes(q) ||
          x.phone.includes(q),
      );
  };
}
