import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { CategoryLinkComponent } from './components/category-link/category-link.component';
import { CategorySectionComponent } from './components/category-section/category-section.component';
import { MainInfoComponent } from './components/products-info-section/main-info/main-info.component';
import { ProductsInfoSectionComponent } from './components/products-info-section/products-info-section.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { FooterComponent } from './components/footer/footer.component';
import { CategoryProductComponent } from './components/category-product/category-product.component';
import { ProductLikeComponent } from './components/also-like-section/product-like/product-like.component';
import { AlsoLikeSectionComponent } from './components/also-like-section/also-like-section.component';
import { ProductDescriptionComponent } from './components/product-description/product-description.component';
import { ProductGalleryComponent } from './components/product-gallery/product-gallery.component';

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
    MainInfoComponent,
    ProductsInfoSectionComponent,
    AboutSectionComponent,
    FooterComponent,
    CategoryProductComponent,
    ProductLikeComponent,
    AlsoLikeSectionComponent,
    ProductDescriptionComponent,
    ProductGalleryComponent,
  ],
})
export class AppComponent {
  title = 'audiophile-ecommerce-website';
}
