import { Directive, effect, ElementRef, inject, signal } from '@angular/core';

@Directive({
  selector: 'img',
  host: {
    '[title]': 'title()',
    '(mouseenter)': 'onImage()',
  },
})
export class Tooltip {
  private el = inject(ElementRef);
  title = signal('');

  onImage() {
    this.title.set(this.el.nativeElement.getAttribute('alt'));
  }
}
