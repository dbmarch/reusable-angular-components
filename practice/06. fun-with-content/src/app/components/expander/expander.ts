import { Component, computed, input, signal } from '@angular/core';

@Component({
  selector: 'app-expander',
  imports: [],
  templateUrl: './expander.html',
  styleUrl: './expander.scss',
  host: {
    '[class.collapsed]': 'this.isCollapsed()',
    '[class.expanded]': 'this.isExpanded()',
  },
})
export class ExpanderComponent {
  readonly #isExpanded = signal(false);

  readonly isExpanded = this.#isExpanded.asReadonly();
  readonly isCollapsed = computed(() => !this.isExpanded());

  toggle() {
    this.#isExpanded.update((value) => !value);
  }
  readonly header = input('');
  readonly content = input('');
}
