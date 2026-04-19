import { Directive, input } from '@angular/core';
import { HighlightDirective } from './highlight.directive';
import { UnderlineDirective } from './underline.directive';

@Directive({
  selector: '[decorate]',
  hostDirectives: [
    UnderlineDirective,
    {
      directive: HighlightDirective,
      inputs: ['highlight: decorate'],
      outputs: ['highlightActivated', 'highlightDeactivated'],
    },
  ],
})
export class DecorateDirective {
  // readonly decorate = input(''); // not necessary but allows for aliasing and future extension
  constructor() {
    console.log('Decorate directive created');
  }
}
