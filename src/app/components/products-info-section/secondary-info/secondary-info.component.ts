import { Component } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'app-secondary-info',
  standalone: true,
  templateUrl: './secondary-info.component.html',
  styleUrl: './secondary-info.component.scss',
  imports: [ButtonComponent],
})
export class SecondaryInfoComponent {}
