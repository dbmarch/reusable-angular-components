import {
  Directive,
  effect,
  inject,
  ElementRef,
  signal,
  computed,
  input,
  linkedSignal,
} from '@angular/core';
import { Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlight5]',
  host: {
    '[style.backgroundColor]': 'bg()',
    '[style.cursor]': '"pointer"',
    '(click)': 'changeColor()',
  },
})
export class HighlightDirective {
  readonly color = input('lime');

  readonly bg = linkedSignal(this.color);

  changeColor() {
    this.bg.set('pink');
  }

  constructor() {
    effect(() => {
      console.log('Highlight Directive changed to:', this.color());
    });
  }
}
