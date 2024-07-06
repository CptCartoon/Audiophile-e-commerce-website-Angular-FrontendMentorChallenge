import { Component } from '@angular/core';
import { CategoryProductComponent } from '../../components/category-product/category-product.component';
import { CategorySectionComponent } from '../../components/category-section/category-section.component';
import { AboutSectionComponent } from '../../components/about-section/about-section.component';
import { CategoryHeaderComponent } from '../../components/category-header/category-header.component';

@Component({
  selector: 'app-category',
  standalone: true,
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
  imports: [
    CategoryProductComponent,
    CategorySectionComponent,
    AboutSectionComponent,
    CategoryHeaderComponent,
  ],
})
export class CategoryComponent {}
