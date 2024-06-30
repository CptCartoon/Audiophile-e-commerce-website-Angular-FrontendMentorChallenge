import { Component } from '@angular/core';
import { MainInfoComponent } from './main-info/main-info.component';
import { SecondaryInfoComponent } from './secondary-info/secondary-info.component';
import { TertiaryInfoComponent } from './tertiary-info/tertiary-info.component';

@Component({
  selector: 'app-products-info-section',
  standalone: true,
  templateUrl: './products-info-section.component.html',
  styleUrl: './products-info-section.component.scss',
  imports: [MainInfoComponent, SecondaryInfoComponent, TertiaryInfoComponent],
})
export class ProductsInfoSectionComponent {}
