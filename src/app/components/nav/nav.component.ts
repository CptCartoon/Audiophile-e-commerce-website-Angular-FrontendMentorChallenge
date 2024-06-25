import { Component } from '@angular/core';
import { CartComponent } from './cart/cart.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
  imports: [CartComponent, CommonModule],
})
export class NavComponent {
  showCart: boolean = false;

  openCart() {
    this.showCart = !this.showCart;
  }
}
