import { Component } from '@angular/core';
import { CheckoutFormComponent } from '../checkout-form/checkout-form.component';
import { CheckoutSummaryComponent } from '../checkout-summary/checkout-summary.component';

@Component({
  selector: 'app-checkout-page',
  standalone: true,
  imports: [CheckoutFormComponent, CheckoutSummaryComponent],
  templateUrl: './checkout-page.component.html',
  styleUrl: './checkout-page.component.scss',
})
export class CheckoutPageComponent {}
