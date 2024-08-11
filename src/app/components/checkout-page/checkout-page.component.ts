import { Component } from '@angular/core';
import { CheckoutFormComponent } from '../checkout-form/checkout-form.component';
import { CheckoutSummaryComponent } from '../checkout-summary/checkout-summary.component';
import { CheckoutModalComponent } from '../checkout-modal/checkout-modal.component';

@Component({
  selector: 'app-checkout-page',
  standalone: true,
  imports: [
    CheckoutFormComponent,
    CheckoutSummaryComponent,
    CheckoutModalComponent,
  ],
  templateUrl: './checkout-page.component.html',
  styleUrl: './checkout-page.component.scss',
})
export class CheckoutPageComponent {}
