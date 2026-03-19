import { Component, input, model } from '@angular/core';

@Component({
  selector: 'app-tab-picker',
  templateUrl: './tab-picker.html',
  styleUrl: './tab-picker.scss',
})
export class TabPickerComponent {
  options = input.required<{ label: string; value: string }[]>();
  value = model.required<string>();

  select(val: string) {
    this.value.set(val);
  }
}
