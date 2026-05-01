import { Component, computed, inject } from '@angular/core';
import { ExpanderComponent } from '../expander.component';

@Component({
  selector: '[expander-toggle]',
  templateUrl: './expander-toggle.component.html',
  styleUrl: './expander-toggle.component.scss',
  host: {
    '(click)': 'onClick()',
  },
})
export class ExpanderToggleComponent {
  // This will find the next closest parent expander component and inject it into this directive
  readonly expanderComponent = inject(ExpanderComponent, { optional: true });

  readonly isExpanded = computed(() => this.expanderComponent?.isExpanded() === true);
  readonly isCollapsed = computed(() => this.expanderComponent?.isCollapsed() === true);
  onClick() {
    console.log('Toggle expander');
    this.expanderComponent?.toggle();
  }
}
