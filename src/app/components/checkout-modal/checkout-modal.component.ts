import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { CheckoutItemComponent } from '../checkout-summary/checkout-item/checkout-item.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout-modal',
  standalone: true,
  imports: [ButtonComponent, CheckoutItemComponent, CommonModule],
  templateUrl: './checkout-modal.component.html',
  styleUrl: './checkout-modal.component.scss',
})
export class CheckoutModalComponent {
  @Input() modal: boolean = false;

  constructor(private router: Router) {}

  backToHome() {
    this.modal = false;
    this.router.navigate(['']);
  }
}
