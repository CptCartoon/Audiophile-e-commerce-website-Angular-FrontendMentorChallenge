import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { CheckoutItemComponent } from './checkout-item/checkout-item.component';
import { CheckoutModalComponent } from '../checkout-modal/checkout-modal.component';
import { CartProduct, CartSummary } from '../../interfaces/product';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkout-summary',
  standalone: true,
  imports: [
    ButtonComponent,
    CheckoutItemComponent,
    CheckoutModalComponent,
    CommonModule,
  ],
  templateUrl: './checkout-summary.component.html',
  styleUrl: './checkout-summary.component.scss',
})
export class CheckoutSummaryComponent implements OnInit {
  @Output() continueAndPay = new EventEmitter<void>();
  cartProducts!: CartProduct[];
  summary: CartSummary = {} as CartSummary;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.getCartProducts();
    this.cartService.cartChange.next(this.cartService._getCart);
    this.cartService.totalPriceChange.next(this.cartService._getTotalPrice);
  }

  continue() {
    this.continueAndPay.emit();
  }

  getCartProducts() {
    this.cartService.cartChange.subscribe({
      next: (data) => {
        this.cartProducts = data;
      },
    });

    this.cartService.totalPriceChange.subscribe({
      next: (data) => {
        if (data) {
          this.summary.totalPrice = data;
          this.summary.shipping = 50;
          this.summary.tax = Math.round(0.2 * this.summary.totalPrice);
        } else {
          this.summary.totalPrice = 0;
          this.summary.shipping = 0;
          this.summary.tax = 0;
        }
      },
    });
  }
}
