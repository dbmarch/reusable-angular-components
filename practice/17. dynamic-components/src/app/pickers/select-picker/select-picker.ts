import { Component, input, model } from '@angular/core';
import { SelectOption } from '../../models/select-option.model';

@Component({
  selector: 'app-select-picker',
  templateUrl: './select-picker.html',
  styleUrl: './select-picker.scss',
})
export class SelectPickerComponent {
  options = input.required<SelectOption[]>();
  value = model.required<string>();

  onChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.value.set(select.value);
  }
}
