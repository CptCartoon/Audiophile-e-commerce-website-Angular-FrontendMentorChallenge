import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-goback',
  standalone: true,
  imports: [],
  templateUrl: './goback.component.html',
  styleUrl: './goback.component.scss',
})
export class GobackComponent {
  @Input() location!: Location;

  constructor(private router: Router) {}

  back(): void {
    this.router.navigate([this.location.back()]);
  }
}
