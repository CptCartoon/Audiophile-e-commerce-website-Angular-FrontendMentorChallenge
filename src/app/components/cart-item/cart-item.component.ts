import { Component, Input } from '@angular/core';
import { AddtocartCounterComponent } from '../addtocart-counter/addtocart-counter.component';
import { CartProduct } from '../../interfaces/product';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [AddtocartCounterComponent],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss',
})
export class CartItemComponent {
  @Input() product: CartProduct | undefined;
}
