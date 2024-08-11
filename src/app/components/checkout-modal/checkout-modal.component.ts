import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { CheckoutItemComponent } from '../checkout-summary/checkout-item/checkout-item.component';

@Component({
  selector: 'app-checkout-modal',
  standalone: true,
  imports: [ButtonComponent, CheckoutItemComponent],
  templateUrl: './checkout-modal.component.html',
  styleUrl: './checkout-modal.component.scss',
})
export class CheckoutModalComponent {}
