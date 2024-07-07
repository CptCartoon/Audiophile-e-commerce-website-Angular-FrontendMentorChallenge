import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() btnLabel!: string;
  @Input() btnLink!: string;
  @Input() className: string = 'btn-default-1';
  @Input() hover: boolean = false;
}
