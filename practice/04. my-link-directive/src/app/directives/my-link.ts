import { Directive, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

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
  constructor() {
    this.routerLink.routerLinkActive = 'selected';
  }
}
