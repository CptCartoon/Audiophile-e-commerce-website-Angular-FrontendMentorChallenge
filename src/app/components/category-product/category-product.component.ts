import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-product',
  standalone: true,
  templateUrl: './category-product.component.html',
  styleUrl: './category-product.component.scss',
  imports: [ButtonComponent, CommonModule],
})
export class CategoryProductComponent {
  @Input() newProduct: boolean = false;
  @Input() textLeft: boolean = false;
}
