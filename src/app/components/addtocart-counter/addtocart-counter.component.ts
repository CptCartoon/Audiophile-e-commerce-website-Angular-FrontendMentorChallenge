import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-addtocart-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './addtocart-counter.component.html',
  styleUrl: './addtocart-counter.component.scss',
})
export class AddtocartCounterComponent {
  @ViewChild('countValue') countValue!: ElementRef;
  @Input() cart: boolean = false;

  value = 0;

  increment() {
    this.countValue.nativeElement.value++;
  }

  decrement() {
    if (this.countValue.nativeElement.value <= 0) {
      this.countValue.nativeElement.value = 0;
    } else {
      this.countValue.nativeElement.value--;
    }
  }
}
