import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
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
export class CheckoutFormComponent implements OnInit {
  myForm!: FormGroup;
  eMoney: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  get controls() {
    return this.myForm.controls;
  }

  initForm() {
    this.myForm = new FormGroup({
      name: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      email: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.email],
      }),
      phone: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      address: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      zipCode: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      city: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      country: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      paymentMethod: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      emoneyNumber: new FormControl(''),
      emoneyPIN: new FormControl(''),
    });
  }

  eMoneyChange(value: boolean) {
    this.eMoney = value;
    if (value) {
      this.myForm.controls['emoneyNumber']?.setValidators(Validators.required);
      this.myForm.controls['emoneyPIN']?.setValidators(Validators.required);
    } else {
      this.myForm.controls['emoneyNumber']?.clearValidators();
      this.myForm.controls['emoneyPIN']?.clearValidators();
    }
    this.myForm.controls['emoneyNumber']?.updateValueAndValidity();
    this.myForm.controls['emoneyPIN']?.updateValueAndValidity();
  }
}
