import { Order } from '../models/models';
import { PRODUCTS } from './products.mock';
import { CUSTOMERS } from './customers.mock';
export const ORDERS: Order[] = Array.from({ length: 1 }, (_, i) => {
  const p = PRODUCTS[i],
    qty = (i % 3) + 1,
    sub = (p.salePrice ?? p.price) * qty;
  const statuses = ['COMPLETED', 'SHIPPING', 'CONFIRMED', 'PENDING', 'COMPLETED'] as const;
  return {
    id: `o-${i + 1}`,
    orderCode: `ORD-202609${String((i % 20) + 10).padStart(2, '0')}-${String(1000 + i)}`,
    customerId: CUSTOMERS[i].id,
    customerName: CUSTOMERS[i].name,
    customerPhone: CUSTOMERS[i].phone,
    items: [
      {
        productId: p.id,
        productName: p.name,
        productImage: p.images[0].url,
        price: p.salePrice ?? p.price,
        quantity: qty,
        subtotal: sub,
      },
    ],
    subtotal: sub,
    shippingFee: 30000,
    discount: i % 4 === 0 ? 20000 : 0,
    total: sub + 30000 - (i % 4 === 0 ? 20000 : 0),
    paymentMethod: i % 2 ? 'BANK_TRANSFER' : 'COD',
    status: statuses[i % statuses.length],
    shippingAddress: {
      fullName: CUSTOMERS[i].name,
      phone: CUSTOMERS[i].phone,
      email: CUSTOMERS[i].email,
      province: 'Da Nang',
      district: 'Thanh Khe',
      ward: 'An Khe',
      address: `${10 + i} Nguyen Van Linh`,
    },
    createdAt: `2026-09-${String(10 + i).padStart(2, '0')}T09:00:00Z`,
    updatedAt: '2026-10-02T09:00:00Z',
  };
});
