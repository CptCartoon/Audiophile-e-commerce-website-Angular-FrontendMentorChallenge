import { Component, Input } from '@angular/core';
import { CartComponent } from './cart/cart.component';
import { CommonModule } from '@angular/common';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { RouterModule } from '@angular/router';
import { CartProduct } from '../../interfaces/product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
  imports: [CartComponent, CommonModule, MobileMenuComponent, RouterModule],
})
export class NavComponent {
  @Input() productNav: boolean = false;
  showCart: boolean = false;
  showMenu: boolean = false;

  products!: CartProduct[];
  totalPrice: number = 0;
  totalCount: number = 0;
  constructor(private cartService: CartService) {}
  openCart() {
    if (this.showMenu) {
      this.showMenu = false;
    }
    this.showCart = !this.showCart;
  }

  openMenu() {
    if (this.showCart) {
      this.showCart = false;
    }
    this.showMenu = !this.showMenu;
  }

  closeModal() {
    this.showMenu = false;
    this.showCart = false;
  }

  ngOnInit(): void {
    this.getCartProducts();
    this.cartService.cartChange.next(this.cartService._getCart);
    this.cartService.totalPriceChange.next(this.cartService._getTotalPrice);
    this.cartService.totalCountChange.next(this.cartService._getTotalCount);
  }

  getCartProducts() {
    this.cartService.cartChange.subscribe({
      next: (data) => {
        this.products = data;
      },
    });

    this.cartService.totalPriceChange.subscribe({
      next: (data) => {
        this.totalPrice = data;
      },
    });

    this.cartService.totalCountChange.subscribe({
      next: (data) => {
        this.totalCount = data;
      },
    });
  }

  clearCart() {
    this.cartService.clearCart();
  }
}
