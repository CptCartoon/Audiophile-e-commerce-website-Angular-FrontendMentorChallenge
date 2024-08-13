import { Injectable } from '@angular/core';
import { CartProduct } from '../interfaces/product';
import { Subject } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: CartProduct[] = [];
  cartChange = new Subject<CartProduct[]>();

  constructor(private data: DataService) {}

  public get _getCart() {
    return this.cart.slice();
  }

  public set _setCart(arr: CartProduct[]) {
    this.cart = [...arr];
    this.cartChange.next(this._getCart);
  }

  addToCart(product: CartProduct) {
    const productCopy = { ...product };
    const index = this.cart.findIndex((item) => item.id === productCopy.id);
    if (index < 0 && productCopy.count > 0) {
      this.cart.push(productCopy);
      this.cartChange.next(this._getCart);
    } else if (index >= 0) {
      this.cart[index].count += productCopy.count;
      this.cartChange.next(this._getCart);
    }
  }

  clearCart() {
    this.cart = [];
    this.cartChange.next(this._getCart);
  }
}
