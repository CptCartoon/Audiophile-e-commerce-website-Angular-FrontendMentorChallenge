import { Component, OnInit, Renderer2 } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
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
  constructor(
    private changeNav: ChangeNavService,
    private router: Router,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.changeNav.productNavChange.subscribe((item) => {
      this.productNav = item;
    });
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.setBodyColor(event.urlAfterRedirects);
      }
    });
  }

  setBodyColor(url: string) {
    if (url.includes('/checkout')) {
      this.renderer.setStyle(document.body, 'background-color', '#F1F1F1');
    } else {
      this.renderer.removeStyle(document.body, 'background-color');
    }
  }
}
