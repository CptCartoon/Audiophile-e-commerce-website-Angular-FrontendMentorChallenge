import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { AddtocartCounterComponent } from '../../components/addtocart-counter/addtocart-counter.component';
import { Product } from '../../interfaces/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-top-section',
  standalone: true,
  templateUrl: './product-top-section.component.html',
  styleUrl: './product-top-section.component.scss',
  imports: [ButtonComponent, AddtocartCounterComponent, CommonModule],
})
export class ProductTopSectionComponent {
  @Input() newProduct: boolean = false;
  @Input() product!: Product | undefined;

  baseLink!: string;

  ngOnInit(): void {
    this.baseLink =
      '/assets/product-' + this.product?.slug + '/desktop/image-product.jpg';
  }
}
