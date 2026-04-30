import { Component } from '@angular/core';
import { ExpanderComponent } from './components/expander/expander';
import { Icon } from './components/icon/icon';
import { ExpanderToggleDirective } from './components/expander/expander-toggle/expander-toggle';

@Component({
  selector: 'app-root',
  imports: [ExpanderComponent, Icon, ExpanderToggleDirective],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
