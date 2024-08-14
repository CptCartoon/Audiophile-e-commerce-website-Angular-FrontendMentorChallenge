import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  input,
  Output,
  ViewChild,
} from '@angular/core';

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
  @Input() count: number = 0;
  @Output() countChange: EventEmitter<number> = new EventEmitter<number>();

  value = this.count;

  increment() {
    this.value++;
    this.countValue.nativeElement.value = this.value;
    this.countChange.emit(this.value);
  }

  decrement() {
    if (this.countValue.nativeElement.value <= 0) {
      this.value = 0;
      this.countValue.nativeElement.value = this.value;
    } else {
      this.value--;
      this.countValue.nativeElement.value = this.value;
    }
    this.countChange.emit(this.value);
  }
}
