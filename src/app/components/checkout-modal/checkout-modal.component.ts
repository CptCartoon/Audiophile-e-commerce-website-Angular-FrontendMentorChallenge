import { Component, Input, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { CheckoutItemComponent } from '../checkout-summary/checkout-item/checkout-item.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { CartProduct } from '../../interfaces/product';

@Component({
  selector: 'app-checkout-modal',
  standalone: true,
  imports: [ButtonComponent, CheckoutItemComponent, CommonModule],
  templateUrl: './checkout-modal.component.html',
  styleUrl: './checkout-modal.component.scss',
})
export class CheckoutModalComponent {
  @Input() modal: boolean = false;

  products: CartProduct[] = [];
  totalCount: number = 0;
  totalPrice: number = 0;

  constructor(private router: Router, private cartService: CartService) {
    this.products = this.cartService._getCart;
    this.totalCount = this.cartService._getTotalCount - this.products[0]?.count;
    this.totalPrice = this.cartService._getTotalPrice;
  }

  backToHome() {
    this.cartService.clearCart();
    this.modal = false;
    this.router.navigate(['/']);
  }
}
