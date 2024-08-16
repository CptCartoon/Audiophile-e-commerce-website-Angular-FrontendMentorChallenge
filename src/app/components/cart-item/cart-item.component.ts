import { Component, Input, OnInit } from '@angular/core';
import { AddtocartCounterComponent } from '../addtocart-counter/addtocart-counter.component';
import { CartProduct } from '../../interfaces/product';
import { CartService } from '../../services/cart.service';
import { CutNamePipe } from '../../pipes/cut-name.pipe';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [AddtocartCounterComponent, CutNamePipe],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss',
})
export class CartItemComponent implements OnInit {
  @Input() product!: CartProduct;
  imgLink!: string;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.imgLink =
      'assets/product-' + this.product?.slug + '/desktop/image-product.jpg';
  }

  updateCount(value: number, id: number) {
    this.cartService.updateItem(value, id);
    this.product.count = value;
  }
}
