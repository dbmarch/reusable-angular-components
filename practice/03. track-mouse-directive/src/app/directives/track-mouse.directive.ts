import { Directive } from '@angular/core';

@Directive({
  selector: '[track-mouse]',
  host: {
    '(mousemove)': 'onMouseMove($event)',
  },
})
export class TrackMouse {
  constructor() {
    console.log('TrackMouse directive created');
  }

  onMouseMove(event: MouseEvent) {
    console.log(`Mouse moved: (${event.clientX}, ${event.clientY})`);
  }
}
