import { Component } from '@angular/core';
import { AboutSectionComponent } from '../../components/about-section/about-section.component';
import { CategorySectionComponent } from '../../components/category-section/category-section.component';
import { AlsoLikeSectionComponent } from '../../components/also-like-section/also-like-section.component';
import { ProductGalleryComponent } from '../../components/product-gallery/product-gallery.component';
import { ProductDescriptionComponent } from '../../components/product-description/product-description.component';
import { ProductTopSectionComponent } from '../../components/product-top-section/product-top-section.component';

@Component({
  selector: 'app-product',
  standalone: true,
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  imports: [
    AboutSectionComponent,
    CategorySectionComponent,
    AlsoLikeSectionComponent,
    ProductGalleryComponent,
    ProductDescriptionComponent,
    ProductTopSectionComponent,
  ],
})
export class ProductComponent {}
