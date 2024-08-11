import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { CheckoutItemComponent } from './checkout-item/checkout-item.component';
import { CheckoutModalComponent } from '../checkout-modal/checkout-modal.component';

@Component({
  selector: 'app-checkout-summary',
  standalone: true,
  imports: [ButtonComponent, CheckoutItemComponent, CheckoutModalComponent],
  templateUrl: './checkout-summary.component.html',
  styleUrl: './checkout-summary.component.scss',
})
export class CheckoutSummaryComponent {
  modal = false;

  continueAndPay() {
    this.modal = true;
  }
}
