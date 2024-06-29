import { Component } from '@angular/core';
import { CategoryLinkComponent } from '../category-link/category-link.component';

@Component({
  selector: 'app-category-section',
  standalone: true,
  templateUrl: './category-section.component.html',
  styleUrl: './category-section.component.scss',
  imports: [CategoryLinkComponent],
})
export class CategorySectionComponent {}
