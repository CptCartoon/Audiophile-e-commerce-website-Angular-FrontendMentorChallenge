import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent } from '../form-components/text-input/text-input.component';
import { RadioInputComponent } from '../form-components/radio-input/radio-input.component';

@Component({
  selector: 'app-checkout-form',
  standalone: true,
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.scss'],
  imports: [
    TextInputComponent,
    CommonModule,
    ReactiveFormsModule,
    RadioInputComponent,
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
      paymentMethod: ['', Validators.required],
      emoneyNumber: [''],
      emoneyPIN: [''],
    });
  }

  eMoneyChange(value: boolean) {
    this.eMoney = value;
    if (value) {
      this.myForm.get('emoneyNumber')?.setValidators(Validators.required);
      this.myForm.get('emoneyPIN')?.setValidators(Validators.required);
    } else {
      this.myForm.get('emoneyNumber')?.clearValidators();
      this.myForm.get('emoneyPIN')?.clearValidators();
    }
    this.myForm.get('emoneyNumber')?.updateValueAndValidity();
    this.myForm.get('emoneyPIN')?.updateValueAndValidity();
  }
}
