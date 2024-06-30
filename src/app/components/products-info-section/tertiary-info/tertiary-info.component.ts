import { Component } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'app-tertiary-info',
  standalone: true,
  templateUrl: './tertiary-info.component.html',
  styleUrl: './tertiary-info.component.scss',
  imports: [ButtonComponent],
})
export class TertiaryInfoComponent {}
