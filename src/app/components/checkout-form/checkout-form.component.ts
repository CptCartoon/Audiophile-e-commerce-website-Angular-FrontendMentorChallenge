import { Component } from '@angular/core';
import { TextInputComponent } from '../form-components/text-input/text-input.component';
import { RadioInputComponent } from '../form-components/radio-input/radio-input.component';

@Component({
  selector: 'app-checkout-form',
  standalone: true,
  templateUrl: './checkout-form.component.html',
  styleUrl: './checkout-form.component.scss',
  imports: [TextInputComponent, RadioInputComponent],
})
export class CheckoutFormComponent {}
