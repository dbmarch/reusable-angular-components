import {
  computed,
  Directive,
  effect,
  ElementRef,
  inject,
  input,
  output,
  linkedSignal,
  Renderer2,
  signal,
} from '@angular/core';

@Directive({
  selector: '[highlight]',
  host: {
    '[style.background-color]': 'bg()',
    '[style.cursor]': '"pointer"',
    '(click)': 'toggleActive()',
  },
  exportAs: 'highlight',
})
export class HighlightDirective {
  readonly color = input('', { alias: 'highlight' });
  public readonly isActive = signal(false);

  readonly highlightActivated = output<void>();

  readonly highlightDeactivated = output<number>();

  activationTime = -1;

  protected readonly bg = computed(() => (this.isActive() ? 'pink' : this.color() || 'lime'));

  toggleActive() {
    this.isActive.update((active) => !active);
    // console.log('isActive', this.isActive());
    if (this.isActive()) {
      this.highlightActivated.emit();
      this.activationTime = Date.now();
    } else {
      this.highlightDeactivated.emit(Date.now() - this.activationTime);
      this.activationTime = -1;
    }
  }
}
