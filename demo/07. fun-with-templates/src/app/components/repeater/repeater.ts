import { CommonModule } from '@angular/common';
import { Component, input, signal, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-repeater',
  imports: [CommonModule],
  templateUrl: './repeater.html',
  styleUrl: './repeater.scss',
})
export class Repeater {
  readonly values = signal(['Red', 'Green', 'Blue', 'Brown']);
  readonly template = input.required<TemplateRef<any>>();

}
