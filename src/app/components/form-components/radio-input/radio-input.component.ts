import { Component, Input, Optional, Self } from '@angular/core';
import {
  ControlContainer,
  ControlValueAccessor,
  FormGroupDirective,
  NgControl,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-radio-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './radio-input.component.html',
  styleUrl: './radio-input.component.scss',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class RadioInputComponent {
  @Input() labelText!: string;
  @Input() name!: string;
  @Input() checked: boolean = false;
  @Input() formControlName!: string;

  constructor(@Self() @Optional() public ngControl: NgControl) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this.NOOP_VALUE_ACCESSOR;
    }
  }

  NOOP_VALUE_ACCESSOR: ControlValueAccessor = {
    writeValue(): void {},
    registerOnChange(): void {},
    registerOnTouched(): void {},
  };
}
