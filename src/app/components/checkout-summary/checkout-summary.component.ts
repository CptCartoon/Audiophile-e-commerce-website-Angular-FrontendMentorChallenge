import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { CheckoutItemComponent } from './checkout-item/checkout-item.component';

@Component({
  selector: 'app-checkout-summary',
  standalone: true,
  imports: [ButtonComponent, CheckoutItemComponent],
  templateUrl: './checkout-summary.component.html',
  styleUrl: './checkout-summary.component.scss',
})
export class CheckoutSummaryComponent {}
