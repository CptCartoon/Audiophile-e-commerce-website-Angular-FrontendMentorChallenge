import { Component } from '@angular/core';
import { AboutInfoComponent } from './about-info/about-info.component';

@Component({
  selector: 'app-about-section',
  standalone: true,
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss',
  imports: [AboutInfoComponent],
})
export class AboutSectionComponent {}
