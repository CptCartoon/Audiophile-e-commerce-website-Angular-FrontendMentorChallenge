import { Component, Input } from '@angular/core';
import { CartComponent } from './cart/cart.component';
import { CommonModule } from '@angular/common';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { RouterModule } from '@angular/router';

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
  private scrollPosition = 0;

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
}
