import { Component } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'app-main-info',
  standalone: true,
  templateUrl: './main-info.component.html',
  styleUrl: './main-info.component.scss',
  imports: [ButtonComponent],
})
export class MainInfoComponent {}
