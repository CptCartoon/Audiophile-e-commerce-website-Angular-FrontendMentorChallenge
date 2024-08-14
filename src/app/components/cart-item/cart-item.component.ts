import { Component, Input, OnInit } from '@angular/core';
import { AddtocartCounterComponent } from '../addtocart-counter/addtocart-counter.component';
import { CartProduct } from '../../interfaces/product';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [AddtocartCounterComponent],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss',
})
export class CartItemComponent implements OnInit {
  @Input() product!: CartProduct;
  imgLink!: string;

  ngOnInit(): void {
    this.imgLink =
      '/assets/product-' + this.product?.slug + '/desktop/image-product.jpg';
  }
}
