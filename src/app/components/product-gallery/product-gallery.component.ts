import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-product-gallery',
  standalone: true,
  imports: [],
  templateUrl: './product-gallery.component.html',
  styleUrl: './product-gallery.component.scss',
})
export class ProductGalleryComponent implements OnInit {
  @Input() product!: Product | undefined;

  baseLink!: string;

  ngOnInit(): void {
    this.baseLink =
      '/assets/product-' + this.product?.slug + '/desktop/image-gallery-';
  }
}
