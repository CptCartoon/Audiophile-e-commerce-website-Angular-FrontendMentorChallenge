import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-addtocart-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './addtocart-counter.component.html',
  styleUrl: './addtocart-counter.component.scss',
})
export class AddtocartCounterComponent {
  @Input() cart: boolean = false;
}
