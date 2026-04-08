import { Directive, inject, ElementRef, signal, computed } from '@angular/core';
import { Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlight3]',
  host: {
    '[style.backgroundColor]': 'bg()  ',
    '[attr.title]': 'bg()',
    '[attr.contenteditable]': 'true',
    '[class.highlighted]': 'isHighlighted()',
    '[class.was-highlighted]': '!isHighlighted()',
    '[class]': 'bgClass()',
  },
})
export class HighlightDirective {
  readonly bg = signal('lime');
  readonly thickness = signal(3);
  readonly isHighlighted = signal(true);
  readonly bgClass = computed(() => `${this.bg()}-highlight`);

  constructor() {
    setTimeout(() => {
      this.bg.set('pink');
      this.isHighlighted.set(false);
    }, 5000);
  }
  // readonly hostElement = inject<ElementRef<HTMLElement>>(ElementRef);
  // readonly renderer = inject(Renderer2);
  // constructor() {
  //   console.log('HighlightDirective created!');
  //   as a last resort, we can always manipulate the DOM element directly
  //    this.hostElement.nativeElement.style.backgroundColor = 'yellow';
  //   but it's better to use the Renderer2 to ensure cross-platform compatibility
  //   this.renderer.setStyle(this.hostElement.nativeElement, 'backgroundColor', 'yellow');
  // }
}
