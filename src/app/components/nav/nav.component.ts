import { Component, Input } from '@angular/core';
import { CartComponent } from './cart/cart.component';
import { CommonModule } from '@angular/common';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { RouterModule } from '@angular/router';
import { Router } from 'express';

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

  openCart() {
    this.showCart = !this.showCart;
  }

  openMenu() {
    this.showMenu = !this.showMenu;
  }
}
