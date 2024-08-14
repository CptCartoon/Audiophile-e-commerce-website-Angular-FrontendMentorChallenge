import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { AddtocartCounterComponent } from '../../components/addtocart-counter/addtocart-counter.component';
import { CartProduct, Product } from '../../interfaces/product';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

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

  cartProduct: CartProduct = {} as CartProduct;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    if (this.product) {
      this.cartProduct = {
        id: this.product.id,
        name: this.product.name,
        slug: this.product.slug,
        price: this.product.price,
        count: 0,
      };
    }

    this.baseLink =
      '/assets/product-' + this.product?.slug + '/desktop/image-product.jpg';
  }
  updateCount(value: number) {
    this.cartProduct.count = value;
  }

  addToCart(product: CartProduct) {
    this.cartService.addToCart(product);
  }
}
