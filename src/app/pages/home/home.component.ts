import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CategorySectionComponent } from '../../components/category-section/category-section.component';
import { ProductsInfoSectionComponent } from '../../components/products-info-section/products-info-section.component';
import { AboutSectionComponent } from '../../components/about-section/about-section.component';
import { ChangeNavService } from '../../services/change-nav.service';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [
    HeaderComponent,
    CategorySectionComponent,
    ProductsInfoSectionComponent,
    AboutSectionComponent,
  ],
})
export class HomeComponent implements OnInit {
  constructor(private changeNav: ChangeNavService) {
    this.changeNav.changeNav(false);
  }

  ngOnInit(): void {
    this.changeNav.changeNav(false);
  }
}
