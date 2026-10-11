import { Category } from '../models/models';
const now = '2026-10-02T10:00:00Z';
const c = (id: string, name: string, parentId: string | null = null): Category => ({
  id,
  name,
  slug: name.toLowerCase().replaceAll(' ', '-'),
  parentId,
  description: `Quality ${name.toLowerCase()} for your pets`,
  imageUrl:
    'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80',
  productCount: 0,
  status: 'ACTIVE',
  createdAt: now,
  updatedAt: now,
});
export const CATEGORIES: Category[] = [
  // c('cat-pet', 'Pet'),
  // c('cat-dog', 'Dog', 'cat-pet'),
  // c('cat-dog-food', 'Dog Food', 'cat-dog'),
  // c('cat-dog-treats', 'Dog Treats', 'cat-dog'),
  // c('cat-dog-toys', 'Dog Toys', 'cat-dog'),
  // c('cat-dog-accessories', 'Dog Accessories', 'cat-dog'),
  // c('cat-cat', 'Cat', 'cat-pet'),
  // c('cat-cat-food', 'Cat Food', 'cat-cat'),
  // c('cat-cat-treats', 'Cat Treats', 'cat-cat'),
  // c('cat-cat-toys', 'Cat Toys', 'cat-cat'),
  // c('cat-cat-accessories', 'Cat Accessories', 'cat-cat'),
  // c('cat-grooming', 'Grooming'),
  // c('cat-beds', 'Beds & Home'),

  c('dog-food', 'Thức ăn cho chó'),
  c('dog-food-mr-vet', 'MR-VET', 'dog-food'),
  c('dog-food-royal-canin', 'Royal Canin', 'dog-food'),
  c('dog-food-keos', 'KEOS', 'dog-food'),
  c('dog-food-luv-care', 'Luv Care', 'dog-food'),
  c('dog-food-zenith', 'Zenith', 'dog-food'),
  c('dog-food-dog-smile', 'Dog Smile', 'dog-food'),
  c('dog-food-smart-heart', 'Smart Heart', 'dog-food'),
  c('dog-food-ganador', 'Ganador', 'dog-food'),
  c('dog-food-caption', 'Caption', 'dog-food'),
  c('dog-food-fib', 'FIB', 'dog-food'),


  c('cat-food', 'Thức ăn cho mèo'),
  c('cat-food-mr-vet', 'MR-VET', 'cat-food'),
  c('cat-food-royal-canin', 'Royal Canin', 'cat-food'),
  c('cat-food-keos', 'KEOS', 'cat-food'),
  c('cat-food-catpy', 'CatPy', 'cat-food'),
  c('cat-food-pet-bite', 'Pet Bite Cat Food', 'cat-food'),
  c('cat-food-today-dinner', "Today's Dinner", 'cat-food'),
  c('cat-food-s2-pet', 'S2 PET', 'cat-food'),
  c('cat-food-felipro', 'Felipro', 'cat-food'),
  c('cat-food-kitten-cat', 'Kitten Cat - Cat eyes', 'cat-food'),
  c('cat-food-fib', 'FIB', 'cat-food'),

  c('dog-pate', 'Pate cho chó'),
  c('dog-pate-mr-vet', 'MR-VET', 'dog-pate'),
  c('dog-pate-royal-canin', 'Royal Canin', 'dog-pate'),

  c('cat-pate', 'Pate cho mèo'),
  c('cat-pate-mr-vet', 'MR-VET', 'cat-pate'),
  c('cat-pate-royal-canin', 'Royal Canin', 'cat-pate'),

  c('dog-toys', 'Phụ kiện cho chó'),
  c('dog-toys-mr-vet', 'MR-VET', 'dog-toys'),
  c('dog-toys-royal-canin', 'Royal Canin', 'dog-toys'),

  c('cat-toys', 'Phụ kiện cho mèo'),
  c('cat-toys-mr-vet', 'MR-VET', 'cat-toys'),
  c('cat-toys-royal-canin', 'Royal Canin', 'cat-toys'),

  c('dog-accessories', 'Phụ kiện cho chó'),
  c('dog-accessories-mr-vet', 'MR-VET', 'dog-accessories'),
  c('dog-accessories-royal-canin', 'Royal Canin', 'dog-accessories'),

  c('cat-accessories', 'Phụ kiện cho mèo'),
  c('cat-accessories-mr-vet', 'MR-VET', 'cat-accessories'),
  c('cat-accessories-royal-canin', 'Royal Canin', 'cat-accessories'),
];
