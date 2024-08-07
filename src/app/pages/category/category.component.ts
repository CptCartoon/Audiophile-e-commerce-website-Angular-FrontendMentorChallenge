import { Component, OnInit } from '@angular/core';
import { CategoryProductComponent } from '../../components/category-product/category-product.component';
import { CategorySectionComponent } from '../../components/category-section/category-section.component';
import { AboutSectionComponent } from '../../components/about-section/about-section.component';
import { CategoryHeaderComponent } from '../../components/category-header/category-header.component';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Product } from '../../interfaces/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category',
  standalone: true,
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
  imports: [
    CommonModule,
    CategoryProductComponent,
    CategorySectionComponent,
    AboutSectionComponent,
    CategoryHeaderComponent,
  ],
})
export class CategoryComponent implements OnInit {
  productsInCategory!: Product[] | undefined;
  categoryName!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private data: DataService
  ) {
    this.route.params.subscribe(() => {
      this.categoryName = this.route.snapshot.params['category'];
      this.productsInCategory = this.data.getProductsByCategory(
        this.categoryName
      );
    });
  }

  ngOnInit(): void {
    if (!this.data.getAllCategories().includes(this.categoryName)) {
      this.router.navigate(['']);
    }
  }
}
