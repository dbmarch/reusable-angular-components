import { Directive, inject, ElementRef, signal, computed } from '@angular/core';
import { Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlight4]',
  host: {
    '[attr.tabindex]': '0',
    '[style.backgroundColor]': 'bg()',
    '[style.cursor]': '"pointer"',
    '(click)': 'changeColor()',
    '(keyup.shift.enter)': 'onKeyPress($event)',
  },
})
export class HighlightDirective {
  readonly bg = signal('lime');

  changeColor() {
    this.bg.set('pink');
  }

  onKeyPress(event: Event) {
    console.log('Key pressed:', event);
  }
}
