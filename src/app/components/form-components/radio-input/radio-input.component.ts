import { CommonModule } from '@angular/common';
import { Component, Input, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'app-radio-input',
  standalone: true,
  templateUrl: './radio-input.component.html',
  styleUrls: ['./radio-input.component.scss'],
  imports: [CommonModule],
})
export class RadioInputComponent implements ControlValueAccessor {
  @Input() labelText!: string;
  @Input() name!: string;
  @Input() value!: string;
  @Input() valid!: boolean;

  checked: boolean = false;
  onChange = (value: any) => {};
  onTouched = () => {};

  constructor(@Self() @Optional() public ngControl: NgControl) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  writeValue(value: any): void {
    this.checked = value === this.value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // Implementacja w razie potrzeby
  }

  onInputChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.checked = inputElement.checked;
    this.onChange(this.value);
    this.onTouched();
  }
}
