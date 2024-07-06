import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-link',
  standalone: true,
  templateUrl: './category-link.component.html',
  styleUrl: './category-link.component.scss',
  imports: [ButtonComponent, RouterModule, CommonModule],
})
export class CategoryLinkComponent {
  @Input({ required: true }) title!: string;
  @Input() link!: string;
  @Input({ required: true }) photo!: string;
  @Input() mobileMenu = false;

  isHovered: boolean = false;

  onMouseOver() {
    this.isHovered = true;
  }

  onMouseOut() {
    this.isHovered = false;
  }
}
