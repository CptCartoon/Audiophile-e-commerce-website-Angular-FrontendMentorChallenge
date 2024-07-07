import { Component, OnInit } from '@angular/core';
import { AboutSectionComponent } from '../../components/about-section/about-section.component';
import { CategorySectionComponent } from '../../components/category-section/category-section.component';
import { AlsoLikeSectionComponent } from '../../components/also-like-section/also-like-section.component';
import { ProductGalleryComponent } from '../../components/product-gallery/product-gallery.component';
import { ProductDescriptionComponent } from '../../components/product-description/product-description.component';
import { ProductTopSectionComponent } from '../../components/product-top-section/product-top-section.component';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Product } from '../../interfaces/product';
import { ChangeNavService } from '../../services/change-nav.service';

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
export class ProductComponent implements OnInit {
  productId!: string;
  productName!: string;
  product!: Product | undefined;
  productNav: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private data: DataService,
    private changeNav: ChangeNavService
  ) {
    this.route.params.subscribe(() => {
      this.productId = this.route.snapshot.params['id'];
      this.product = this.data.getProductById(parseInt(this.productId));
      this.changeNav.changeNav();
    });
  }

  ngOnInit(): void {
    if (!this.productId && this) {
      this.router.navigate(['']);
    }

    console.log(this.product);
  }
}
