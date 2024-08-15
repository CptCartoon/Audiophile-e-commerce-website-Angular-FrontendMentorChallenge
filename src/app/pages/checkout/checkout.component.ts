import { Component, OnInit } from '@angular/core';
import { ChangeNavService } from '../../services/change-nav.service';
import { TextInputComponent } from '../../components/form-components/text-input/text-input.component';
import { RadioInputComponent } from '../../components/form-components/radio-input/radio-input.component';
import { CheckoutFormComponent } from '../../components/checkout-form/checkout-form.component';
import { CheckoutSummaryComponent } from '../../components/checkout-summary/checkout-summary.component';
import { CheckoutPageComponent } from '../../components/checkout-page/checkout-page.component';
import { CartService } from '../../services/cart.service';
import { CartProduct, CartSummary } from '../../interfaces/product';
import { Location } from '@angular/common';
import { GobackComponent } from '../../components/goback/goback.component';

@Component({
  selector: 'app-checkout',
  standalone: true,
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
  imports: [
    TextInputComponent,
    CheckoutFormComponent,
    CheckoutSummaryComponent,
    CheckoutPageComponent,
    GobackComponent,
  ],
})
export class CheckoutComponent implements OnInit {
  cartProducts!: CartProduct[];
  summary!: CartSummary;

  constructor(private changeNav: ChangeNavService, public location: Location) {}

  ngOnInit(): void {
    this.changeNav.changeNav(true);
  }
}
