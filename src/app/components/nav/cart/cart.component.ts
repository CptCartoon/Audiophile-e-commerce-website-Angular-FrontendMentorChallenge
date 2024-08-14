import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() closeCart = new EventEmitter<void>();
  @Input() products!: CartProduct[];
  @Input() totalPrice: number = 0;
  @Input() totalCount: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  clearCart() {
    this.cartService.clearCart();
  }

  click() {
    this.closeCart.emit();
  }
}
