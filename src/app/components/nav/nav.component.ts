import { Component } from '@angular/core';
import { CartComponent } from './cart/cart.component';
import { CommonModule } from '@angular/common';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
  imports: [CartComponent, CommonModule, MobileMenuComponent],
})
export class NavComponent {
  showCart: boolean = false;
  showMenu: boolean = false;

  openCart() {
    this.showCart = !this.showCart;
  }

  openMenu() {
    this.showMenu = !this.showMenu;
  }
}
