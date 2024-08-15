import { Component, Input, OnInit } from '@angular/core';
import { ProductLikeComponent } from './product-like/product-like.component';
import { Product } from '../../interfaces/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-also-like-section',
  standalone: true,
  templateUrl: './also-like-section.component.html',
  styleUrl: './also-like-section.component.scss',
  imports: [ProductLikeComponent, CommonModule],
})
export class AlsoLikeSectionComponent implements OnInit {
  @Input() product!: Product | undefined;

  ngOnInit(): void {}

  createImageLink(slug: string) {
    return '/assets/shared/desktop/image-' + slug + '.jpg';
  }
}
