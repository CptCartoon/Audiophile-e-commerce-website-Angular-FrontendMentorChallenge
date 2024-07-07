import { Component, Input } from '@angular/core';
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
export class AlsoLikeSectionComponent {
  @Input() product!: Product | undefined;

  createImageLink(slug: string) {
    return '/assets/shared/desktop/image-' + slug + '.jpg';
  }
}
