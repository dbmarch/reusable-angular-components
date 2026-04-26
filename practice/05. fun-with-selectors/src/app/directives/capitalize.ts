import { Directive, ElementRef, inject, Renderer2 } from '@angular/core';
import { capitalizeWords } from '../utils/string.utils';

// we can make the directive work without the atribute.
// This is a transparent directive that will capitalize the text in any input of type text. We can make it more specific by adding an attribute selector, but for the sake of the exercise, we will keep it simple.
// Where ever you include this directive. It will capitalize the text in the input when it loses focus (on blur event).
@Directive({
  // selector: 'input[type="text"][capitals]',
  selector: 'input[type="text"]',
  host: {
    '[style.border-color]': '"red"',
    '(blur)': 'capitalize($event)',
  },
  exportAs: 'highlight',
})
export class Capitalize {
  private el = inject(ElementRef);
  readonly renderer = inject(Renderer2);

  constructor() {
    // const input = this.el.nativeElement as HTMLInputElement;
    // input.addEventListener('input', () => {
    //   console.log('capitalizing');
    //   input.value = input.value.toUpperCase();
    // });
  }

  capitalize(event: FocusEvent) {
    const input = event.target as HTMLInputElement;
    input.value = input.value;
    const fixedValue = capitalizeWords(input.value);
    this.renderer.setProperty(input, 'value', fixedValue);
  }
}
