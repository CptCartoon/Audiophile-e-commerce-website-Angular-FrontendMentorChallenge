import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { ProductComponent } from './pages/product/product.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Audiophile - Home Page',
  },
  {
    path: 'category/:category',
    component: CategoryComponent,
    title: 'Category',
  },
  {
    path: 'product/:id',
    component: ProductComponent,
    title: 'Product',
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    title: 'Checkout',
  },
];
