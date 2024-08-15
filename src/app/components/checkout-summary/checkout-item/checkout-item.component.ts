import { Component, Input, OnInit } from '@angular/core';
import { CartProduct } from '../../../interfaces/product';

@Component({
  selector: 'app-checkout-item',
  standalone: true,
  imports: [],
  templateUrl: './checkout-item.component.html',
  styleUrl: './checkout-item.component.scss',
})
export class CheckoutItemComponent implements OnInit {
  @Input() product!: CartProduct;
  imgLink!: string;

  ngOnInit(): void {
    this.imgLink =
      '/assets/product-' + this.product?.slug + '/desktop/image-product.jpg';
  }
}
