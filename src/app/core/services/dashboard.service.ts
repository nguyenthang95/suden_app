import { Injectable, computed } from '@angular/core';
import { ProductService } from './product.service';
import { OrderService } from './order.service';
import { CustomerService } from './customer.service';
@Injectable({ providedIn: 'root' })
export class DashboardService {
  constructor(
    private p: ProductService,
    private o: OrderService,
    private c: CustomerService,
  ) {}
  stats = computed(() => ({
    revenue: this.o
      .orders()
      .filter((x) => x.status !== 'CANCELLED')
      .reduce((n, x) => n + x.total, 0),
    orders: this.o.orders().length,
    products: this.p.products().length,
    customers: this.c.customers().length,
  }));
}
