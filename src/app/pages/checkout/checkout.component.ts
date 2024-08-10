import { Component, OnInit } from '@angular/core';
import { ChangeNavService } from '../../services/change-nav.service';
import { TextInputComponent } from '../../components/form-components/text-input/text-input.component';
import { RadioInputComponent } from '../../components/form-components/radio-input/radio-input.component';
import { CheckoutFormComponent } from '../../components/checkout-form/checkout-form.component';
import { CheckoutSummaryComponent } from '../../components/checkout-summary/checkout-summary.component';
import { CheckoutPageComponent } from '../../components/checkout-page/checkout-page.component';

@Component({
  selector: 'app-checkout',
  standalone: true,
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
  imports: [
    TextInputComponent,
    RadioInputComponent,
    CheckoutFormComponent,
    CheckoutSummaryComponent,
    CheckoutPageComponent,
  ],
})
export class CheckoutComponent implements OnInit {
  constructor(private changeNav: ChangeNavService) {}
  ngOnInit(): void {
    this.changeNav.changeNav();
  }
}
