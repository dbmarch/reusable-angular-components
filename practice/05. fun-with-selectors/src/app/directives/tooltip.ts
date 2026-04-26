import { Directive, effect, ElementRef, inject, input, signal } from '@angular/core';

@Directive({
  selector: 'img[alt]',
  host: {
    '[title]': 'alt()',
    // '(mouseenter)': 'onImage()',
  },
})
export class Tooltip {
  // Read the alt attribute of the image and set it as the title when the mouse enters the image
  // private el = inject(ElementRef);
  title = signal('');
  readonly alt = input('');

  // onImage() {
  //   this.title.set(this.el.nativeElement.getAttribute('alt'));
  // }

  // constructor() {
  //   effect(() => {
  //     console.log(`Tooltip: ${this.alt()}`);
  //   });
  // }
}
