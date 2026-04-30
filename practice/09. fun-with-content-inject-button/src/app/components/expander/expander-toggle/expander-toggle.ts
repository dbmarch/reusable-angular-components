import { Directive, inject } from '@angular/core';
import { ExpanderComponent } from '../expander.component';

@Directive({
  selector: '[expander-toggle]',
  host: {
    '(click)': 'onClick()',
  },
})
export class ExpanderToggleDirective {
  // This will find the next closest parent expander component and inject it into this directive
  readonly expanderComponent = inject(ExpanderComponent);
  onClick() {
    console.log('Toggle expander');
    this.expanderComponent.toggle();
  }
}
