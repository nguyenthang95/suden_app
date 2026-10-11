import { Injectable, signal } from '@angular/core';
import { Customer } from '../models/models';
import { CUSTOMERS } from '../mock/customers.mock';
@Injectable({ providedIn: 'root' })
export class CustomerService {
  private data = signal<Customer[]>(structuredClone(CUSTOMERS));
  customers = this.data.asReadonly();
  toggleStatus(id: string) {
    this.data.update((xs) =>
      xs.map((x) =>
        x.id === id ? { ...x, status: x.status === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE' } : x,
      ),
    );
  }
  getById(id: string) {
    return this.data().find((x) => x.id === id);
  }
}
