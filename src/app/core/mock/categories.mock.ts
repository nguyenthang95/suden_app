import { Category } from '../models/models';

export const CATEGORIES: Category[] = [
  // =========================
  // DOG FOOD
  // =========================
  {
    id: 'dog-food',
    name: 'Hạt cho chó',
    slug: 'hat-cho-cho',
    parentId: null,
    description: 'Thức ăn hạt khô dành cho chó ở nhiều độ tuổi.', 
    imageUrl:
      'https://fexafkqzpbzjcupvbfhe.supabase.co/storage/v1/object/public/product-images/blog/bec8d49b-9c80-4aed-9959-9e300413ad92/3b8d7a8d6c6af6df.png?auto=format&fit=crop&w=600&q=80',
    productCount: 1,
    status: 'ACTIVE',
    createdAt: '2026-10-02T10:00:00Z',
    updatedAt: '2026-10-02T10:00:00Z',
  },
  {
    id: 'dog-food-mr-vet',
    name: 'MR-VET Cho Chó',
    slug: 'mr-vet-cho-cho',
    parentId: 'dog-food',
    description: 'Thức ăn cho chó hãng MR-VET.', 
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcI8WCMAt3Ywwfym7AjW0rWAc-j943oOSwiBN0MgmMEQ&s=10?auto=format&fit=crop&w=600&q=80',
    productCount: 1,
    status: 'ACTIVE',
    createdAt: '2026-10-02T10:00:00Z',
    updatedAt: '2026-10-02T10:00:00Z',
  },
  {
    id: 'cat-food',
    name: 'Hạt cho mèo',
    slug: 'hat-cho-meo',
    parentId: null,
    description: 'Thức ăn hạt khô dành cho mèo ở nhiều độ tuổi.', 
    imageUrl:
      'https://kinpetshop.com/wp-content/uploads/hat-cho-meo-con.jpg?auto=format&fit=crop&w=600&q=80',
    productCount: 6,
    status: 'ACTIVE',
    createdAt: '2026-10-02T10:00:00Z',
    updatedAt: '2026-10-02T10:00:00Z',
  },
  {
    id: 'cat-food-mr-vet',
    name: 'MR-VET Cho Mèo',
    slug: 'mr-vet-cho-meo',
    parentId: 'cat-food',
    description: 'Thức ăn cho mèo hãng MR-VET.', 
    imageUrl:
      'https://congnghemayphuthinh.vn/wp-content/uploads/2021/12/thuc-an-cho-cho-meo.jpg?auto=format&fit=crop&w=600&q=80',
    productCount: 6,
    status: 'ACTIVE',
    createdAt: '2026-10-02T10:00:00Z',
    updatedAt: '2026-10-02T10:00:00Z',
  },
];
