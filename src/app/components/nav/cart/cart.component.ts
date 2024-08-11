import { Component } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';
import { CartItemComponent } from '../../cart-item/cart-item.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  imports: [ButtonComponent, CartItemComponent],
})
export class CartComponent {}
