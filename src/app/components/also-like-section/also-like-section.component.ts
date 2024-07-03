import { Component } from '@angular/core';
import { ProductLikeComponent } from './product-like/product-like.component';

@Component({
  selector: 'app-also-like-section',
  standalone: true,
  templateUrl: './also-like-section.component.html',
  styleUrl: './also-like-section.component.scss',
  imports: [ProductLikeComponent],
})
export class AlsoLikeSectionComponent {}
