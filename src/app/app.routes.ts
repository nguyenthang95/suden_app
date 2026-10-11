import { Routes } from '@angular/router';

import { authGuard, adminGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  // =====================================================
  // STOREFRONT
  // =====================================================
  {
    path: '',
    loadComponent: () =>
      import('./layouts/storefront-layout/storefront-layout.component').then(
        (m) => m.StorefrontLayoutComponent,
      ),

    children: [
      {
        path: '',
        loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent),
      },

      {
        path: 'categories',
        data: {
          breadcrumb: 'breadcrumb.categories',
        },
        loadComponent: () =>
          import('./features/categories/categories.component').then((m) => m.CategoriesComponent),
      },

      {
        path: 'products',
        data: {
          breadcrumb: 'breadcrumb.products',
        },
        loadComponent: () =>
          import('./features/products/product-list/product-list.component').then(
            (m) => m.ProductListComponent,
          ),
      },

      {
        path: 'products/:id',
        data: {
          breadcrumb: 'breadcrumb.productDetail',
        },
        loadComponent: () =>
          import('./features/products/product-detail/product-detail.component').then(
            (m) => m.ProductDetailComponent,
          ),
      },

      {
        path: 'cart',
        data: {
          breadcrumb: 'breadcrumb.cart',
        },
        loadComponent: () => import('./features/cart/cart.component').then((m) => m.CartComponent),
      },

      {
        path: 'checkout',
        canActivate: [authGuard],
        data: {
          breadcrumb: 'breadcrumb.checkout',
        },
        loadComponent: () =>
          import('./features/checkout/checkout.component').then((m) => m.CheckoutComponent),
      },

      {
        path: 'order-success',
        canActivate: [authGuard],
        data: {
          breadcrumb: 'breadcrumb.orderSuccess',
        },
        loadComponent: () =>
          import('./features/order-success/order-success.component').then(
            (m) => m.OrderSuccessComponent,
          ),
      },

      {
        path: 'account',
        canActivate: [authGuard],
        data: {
          breadcrumb: 'breadcrumb.account',
        },
        loadComponent: () =>
          import('./features/account/account.component').then((m) => m.AccountComponent),
      },
    ],
  },

  // =====================================================
  // AUTH
  // =====================================================
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login/login.component').then((m) => m.LoginComponent),
  },

  {
    path: 'register',
    loadComponent: () =>
      import('./features/auth/register/register.component').then((m) => m.RegisterComponent),
  },

  {
    path: 'forgot-password',
    loadComponent: () =>
      import('./features/auth/forgot-password/forgot-password.component').then(
        (m) => m.ForgotPasswordComponent,
      ),
  },

  // =====================================================
  // ADMIN
  // =====================================================
  {
    path: 'admin',
    canActivate: [adminGuard],

    loadComponent: () =>
      import('./layouts/admin-layout/admin-layout.component').then((m) => m.AdminLayoutComponent),

    children: [
      // /admin
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },

      // /admin/dashboard
      {
        path: 'dashboard',
        data: {
          breadcrumb: 'breadcrumb.dashboard',
        },
        loadComponent: () =>
          import('./features/admin/dashboard/dashboard.component').then(
            (m) => m.AdminDashboardComponent,
          ),
      },

      // /admin/products
      {
        path: 'products',
        data: {
          breadcrumb: 'breadcrumb.products',
        },
        loadComponent: () =>
          import('./features/admin/products/products.component').then(
            (m) => m.AdminProductsComponent,
          ),
      },

      // /admin/categories
      {
        path: 'categories',
        data: {
          breadcrumb: 'breadcrumb.categories',
        },
        loadComponent: () =>
          import('./features/admin/categories/categories.component').then(
            (m) => m.AdminCategoriesComponent,
          ),
      },

      // /admin/orders
      {
        path: 'orders',
        data: {
          breadcrumb: 'breadcrumb.orders',
        },
        loadComponent: () =>
          import('./features/admin/orders/orders.component').then((m) => m.AdminOrdersComponent),
      },

      // /admin/customers
      {
        path: 'customers',
        data: {
          breadcrumb: 'breadcrumb.customers',
        },
        loadComponent: () =>
          import('./features/admin/customers/customers.component').then(
            (m) => m.AdminCustomersComponent,
          ),
      },
    ],
  },

  // =====================================================
  // 404
  // =====================================================
  {
    path: '**',
    redirectTo: '',
  },
];
