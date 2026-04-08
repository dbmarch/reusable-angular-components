import { Directive, inject, ElementRef, signal } from '@angular/core';
import { Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlight]',
  host: {
    '[style.backgroundColor]': 'bg()  ',
    '[style.border]': '"0px solid blue"',
    // '[style.border-bottom-width]': 'thickness() + "px"',
    '[style.border-bottom-width.px]': 'thickness()',
    '[style.--my-property]': 'thickness()',
  },
})
export class HighlightDirective {
  readonly bg = signal('lime');
  readonly thickness = signal(3);

  constructor() {
    setTimeout(() => {
      this.bg.set('cyan');
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
