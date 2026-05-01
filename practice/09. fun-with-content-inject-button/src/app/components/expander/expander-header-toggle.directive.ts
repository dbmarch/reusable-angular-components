import { Directive, inject } from '@angular/core';
import { ExpanderComponent } from './expander.component';

@Directive({
  selector: '[expander-header][toggle]',
  host: {
    '[style.cursor]': '"pointer"',
  },
})
export class ExpanderHeaderToggleDirective {
  readonly expander = inject(ExpanderComponent, { optional: true });
}
