import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { AddtocartCounterComponent } from '../../components/addtocart-counter/addtocart-counter.component';

@Component({
  selector: 'app-product-top-section',
  standalone: true,
  templateUrl: './product-top-section.component.html',
  styleUrl: './product-top-section.component.scss',
  imports: [ButtonComponent, AddtocartCounterComponent],
})
export class ProductTopSectionComponent {
  @Input() newProduct: boolean = false;
}
