import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { CategoryLinkComponent } from './components/category-link/category-link.component';
import { CategorySectionComponent } from './components/category-section/category-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    NavComponent,
    HeaderComponent,
    CategoryLinkComponent,
    CategorySectionComponent,
  ],
})
export class AppComponent {
  title = 'audiophile-ecommerce-website';
}
