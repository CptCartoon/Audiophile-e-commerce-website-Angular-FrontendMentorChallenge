import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-input',
  standalone: true,
  imports: [],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.scss',
})
export class TextInputComponent {
  @Input() labelText!: string;
  @Input() placeholder!: string;
  @Input() type!: string;
}
