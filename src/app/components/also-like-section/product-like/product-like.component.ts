import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'app-product-like',
  standalone: true,
  templateUrl: './product-like.component.html',
  styleUrl: './product-like.component.scss',
  imports: [ButtonComponent],
})
export class ProductLikeComponent {
  @Input() link!: string;
  @Input() name!: string;
}
