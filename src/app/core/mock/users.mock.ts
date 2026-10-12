import { User } from '../models/models';
export const USERS: User[] = [
  {
    id: 'u-admin',
    name: 'Admin',
    email: 'admin@example.com',
    password: 'Admin@123',
    role: 'ADMIN',
  },
  {
    id: 'u-customer',
    name: 'Nguyen Van An',
    email: 'customer@example.com',
    password: 'Customer@123',
    role: 'CUSTOMER',
  },
];
