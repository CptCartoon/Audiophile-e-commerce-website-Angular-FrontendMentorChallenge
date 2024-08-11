import { Component } from '@angular/core';
import { TextInputComponent } from '../form-components/text-input/text-input.component';
import { RadioInputComponent } from '../form-components/radio-input/radio-input.component';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkout-form',
  standalone: true,
  templateUrl: './checkout-form.component.html',
  styleUrl: './checkout-form.component.scss',
  imports: [
    TextInputComponent,
    RadioInputComponent,
    CommonModule,
    ReactiveFormsModule,
  ],
})
export class CheckoutFormComponent {
  myForm: FormGroup;
  eMoney: boolean = false;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      zipCode: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      emoney: ['', Validators.required],
      cash: ['', Validators.required],
      emoneyNumber: ['', Validators.required],
      emoneyPIN: ['', Validators.required],
    });
  }

  eMoneyChange(value: boolean) {
    this.eMoney = value;
  }
}
