import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { ChangeNavService } from './services/change-nav.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, NavComponent, FooterComponent, CommonModule],
})
export class AppComponent implements OnInit {
  title = 'audiophile-ecommerce-website';
  productNav: boolean = false;
  constructor(private changeNav: ChangeNavService) {}

  ngOnInit(): void {
    this.changeNav.productNavChange.subscribe((item) => {
      this.productNav = item;
    });
  }
}
