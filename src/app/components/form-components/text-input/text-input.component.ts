import { CommonModule } from '@angular/common';
import {
  Component,
  forwardRef,
  Input,
  OnChanges,
  OnInit,
  Optional,
  Self,
  SimpleChanges,
} from '@angular/core';
import {
  ControlContainer,
  ControlValueAccessor,
  FormGroupDirective,
  NgControl,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-text-input',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.scss',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class TextInputComponent {
  @Input() labelText!: string;
  @Input() placeholder!: string;
  @Input() type!: string;
  @Input() formControlName!: string;
  @Input() valid!: boolean;

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
