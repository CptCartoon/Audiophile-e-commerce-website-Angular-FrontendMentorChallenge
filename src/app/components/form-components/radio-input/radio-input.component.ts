import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-radio-input',
  standalone: true,
  imports: [],
  templateUrl: './radio-input.component.html',
  styleUrl: './radio-input.component.scss',
})
export class RadioInputComponent {
  @Input() labelText!: string;
  @Input() name!: string;
  @Input() checked!: boolean;
}
