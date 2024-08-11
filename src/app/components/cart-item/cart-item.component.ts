import { Component } from '@angular/core';
import { AddtocartCounterComponent } from '../addtocart-counter/addtocart-counter.component';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [AddtocartCounterComponent],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss',
})
export class CartItemComponent {}
