import { Component, Input, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-category-product',
  standalone: true,
  templateUrl: './category-product.component.html',
  styleUrl: './category-product.component.scss',
  imports: [ButtonComponent, CommonModule],
})
export class CategoryProductComponent implements OnInit {
  @Input() product!: Product;
  @Input() textLeft: boolean = false;

  baseLink!: string;

  ngOnInit(): void {
    this.baseLink =
      '/assets/product-' +
      this.product.slug +
      '/desktop/image-category-page-preview.jpg';
  }
}
