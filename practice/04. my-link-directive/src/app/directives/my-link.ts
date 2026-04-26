import { Directive, inject, InjectionToken } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export const MY_LINK_ACTIVE_CLASS = new InjectionToken<string>('MY_LINK_ACTIVE_CLASS');
export function provideMyLinkActiveClass(className: string) {
  return { provide: MY_LINK_ACTIVE_CLASS, useValue: className };
}

@Directive({
  selector: '[myLink]',
  hostDirectives: [
    RouterLinkActive,
    {
      directive: RouterLink,
      inputs: ['routerLink: myLink'],
    },
  ],
})
export class MyLink {
  readonly routerLink = inject(RouterLinkActive);
  readonly className = inject(MY_LINK_ACTIVE_CLASS, { optional: true });
  constructor() {
    this.routerLink.routerLinkActive = this.className || 'selected';
  }
}
