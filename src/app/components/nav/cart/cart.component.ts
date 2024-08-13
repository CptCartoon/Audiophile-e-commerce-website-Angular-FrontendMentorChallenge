import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';
import { CartItemComponent } from '../../cart-item/cart-item.component';
import { CartProduct } from '../../../interfaces/product';
import { CartService } from '../../../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  imports: [ButtonComponent, CartItemComponent, CommonModule],
})
export class CartComponent implements OnInit {
  products: CartProduct[] | undefined;
  product = [{ name: 'xd1' }, { name: 'xd2' }];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.getCartProducts();
    this.cartService.cartChange.next(this.cartService._getCart);
  }

  getCartProducts() {
    this.cartService.cartChange.subscribe({
      next: (data) => {
        this.products = data;
        console.log(this.products);
      },
    });
  }
}
