import { Directive, ElementRef, inject, signal } from '@angular/core';
import { clamp } from './helpers';

@Directive({
  selector: '[track-mouse]',
  host: {
    '(mousemove)': 'onMouseMove($event)',
    '[style.--mouse-x.px]': 'x()',
    '[style.--mouse-y.px]': 'y()',
  },
  exportAs: 'track-mouse',
})
export class TrackMouse {
  private el = inject(ElementRef);
  x = signal<number>(0);
  y = signal<number>(0);

  onMouseMove(event: MouseEvent) {
    const rect = this.el.nativeElement.getBoundingClientRect();
    this.x.set(clamp(0, event.clientX - rect.left, rect.width));
    this.y.set(clamp(0, event.clientY - rect.top, rect.height));
  }
}
