import { ImageUploadItem } from "../../shared/components/image-uploader/image-uploader";

export type Status = 'ACTIVE' | 'INACTIVE';
export type OrderStatus = 'PENDING' | 'CONFIRMED' | 'SHIPPING' | 'COMPLETED' | 'CANCELLED';
export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  imageUrl?: string;
  parentId?: string | null;
  productCount?: number;
  status: Status;
  createdAt: string;
  updatedAt: string;
}
export interface ProductImage {
  id: string;
  productId: string;
  imageUrl: string;
  isPrimary: boolean;
  sortOrder: number;
}
export interface Product {
  id: string;
  name: string;
  slug: string;
  sku: string;
  categoryId: string;
  categoryName: string;
  price: number;
  salePrice?: number;
  stock: number;
  shortDescription?: string;
  description: string;
  images: ImageUploadItem[];
  featured: boolean;
  status: Status;
  createdAt: string;
  updatedAt: string;
}
export interface CartItem {
  productId: string;
  product: Product;
  quantity: number;
  price: number;
  subtotal: number;
}
export interface ShippingAddress {
  fullName: string;
  phone: string;
  email: string;
  province: string;
  district: string;
  ward: string;
  address: string;
}
export interface OrderItem {
  productId: string;
  productName: string;
  productImage?: string;
  price: number;
  quantity: number;
  subtotal: number;
}
export interface Order {
  id: string;
  orderCode: string;
  customerId: string;
  customerName: string;
  customerPhone: string;
  items: OrderItem[];
  subtotal: number;
  shippingFee: number;
  discount: number;
  total: number;
  paymentMethod: 'COD' | 'BANK_TRANSFER';
  status: OrderStatus;
  shippingAddress: ShippingAddress;
  note?: string;
  createdAt: string;
  updatedAt: string;
}
export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar?: string;
  totalOrders: number;
  totalSpent: number;
  status: Status;
  createdAt: string;
}
export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: 'CUSTOMER' | 'ADMIN';
}
export interface ProductQuery {
  search?: string;
  category?: string;
  sort?: 'featured' | 'newest' | 'price_asc' | 'price_desc' | 'name_asc';
  page?: number;
  pageSize?: number;
}
export interface PagedResult<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
}
