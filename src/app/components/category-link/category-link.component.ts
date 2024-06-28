import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-category-link',
  standalone: true,
  templateUrl: './category-link.component.html',
  styleUrl: './category-link.component.scss',
  imports: [ButtonComponent],
})
export class CategoryLinkComponent {
  @Input({ required: true }) title!: string;
  @Input() link!: string;
  @Input({ required: true }) photo!: string;
}
