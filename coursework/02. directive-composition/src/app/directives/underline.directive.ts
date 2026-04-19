import { Directive } from '@angular/core';

@Directive({
  selector: '[underline]',
  host: {
    '[style.text-decoration]': '"underline"',
  },
  exportAs: 'underline',
})
export class UnderlineDirective {
  constructor() {
    console.log('Underline directive created');
  }
}
