import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { CartProduct } from '../interfaces/product';
import { Subject } from 'rxjs';
import { DataService } from './data.service';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: CartProduct[] = [];
  cartChange = new Subject<CartProduct[]>();

  private totalPrice: number = 0;
  totalPriceChange = new Subject<number>();

  private totalCount: number = 0;
  totalCountChange = new Subject<number>();

  constructor(
    private data: DataService,
    @Inject(PLATFORM_ID) private platformId: any
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.loadCartFromLocalStorage();
    }
  }
  public get _getCart() {
    return this.cart.slice();
  }

  public set _setCart(arr: CartProduct[]) {
    this.cart = [...arr];
    this.saveCartToLocalStorage();
    this.cartChange.next(this._getCart);
  }

  public get _getTotalPrice() {
    return this.totalPrice;
  }

  public get _getTotalCount() {
    return this.totalCount;
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

    this.saveCartToLocalStorage();
    this.cartChange.next(this._getCart);
    this.getCartPrice();
    this.getTotalCount();
  }

  getCartPrice() {
    this.totalPrice = 0;
    this.cart.forEach((item) => (this.totalPrice += item.price * item.count));
    this.saveCartToLocalStorage();
    this.totalPriceChange.next(this.totalPrice);
  }

  getTotalCount() {
    this.totalCount = 0;
    this.cart.forEach((item) => (this.totalCount += item.count));
    this.saveCartToLocalStorage();
    this.totalCountChange.next(this.totalCount);
  }

  updateItem(value: number, id: number) {
    const updatedItem = this.cart.find((item) => item.id === id);
    console.log(value);
    if (updatedItem) {
      updatedItem.count = value;
    }

    if (updatedItem && updatedItem.count <= 0) {
      this.cart = this.cart.filter((item) => item.id !== updatedItem?.id);
    }

    this.cartChange.next(this._getCart);
    this.getTotalCount();
    this.getCartPrice();
    this.saveCartToLocalStorage();
  }

  clearCart() {
    this.cart = [];
    this.saveCartToLocalStorage();
    this.cartChange.next(this._getCart);
    this.totalPrice = 0;
    this.totalPriceChange.next(this._getTotalPrice);
  }

  private saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
    localStorage.setItem('totalPrice', JSON.stringify(this.totalPrice));
    localStorage.setItem('totalCount', JSON.stringify(this.totalCount));
  }

  private loadCartFromLocalStorage() {
    const storedCart = localStorage.getItem('cart');
    const storedPrice = localStorage.getItem('totalPrice');
    const storedCount = localStorage.getItem('totalCount');

    if (storedCart) {
      this.cart = JSON.parse(storedCart);
      this.cartChange.next(this._getCart);
    }

    if (storedPrice) {
      this.totalPrice = JSON.parse(storedPrice);
      this.totalPriceChange.next(this.totalPrice);
    }

    if (storedCount) {
      this.totalCount = JSON.parse(storedCount);
      this.totalCountChange.next(this.totalCount);
    }
  }
}
