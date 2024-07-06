import { Component } from '@angular/core';
import { CategoryLinkComponent } from '../../category-link/category-link.component';

@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  templateUrl: './mobile-menu.component.html',
  styleUrl: './mobile-menu.component.scss',
  imports: [CategoryLinkComponent],
})
export class MobileMenuComponent {}
