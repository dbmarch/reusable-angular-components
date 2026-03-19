import { Component, input, model } from '@angular/core';
import { SelectOption } from '../../models/select-option.model';

@Component({
  selector: 'app-tab-picker',
  templateUrl: './tab-picker.html',
  styleUrl: './tab-picker.scss',
})
export class TabPickerComponent {
  options = input.required<SelectOption[]>();
  value = model.required<string>();

  select(val: string) {
    this.value.set(val);
  }
}
