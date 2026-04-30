import { Component } from '@angular/core';
import { Icon } from './components/icon/icon';
// import { ExpanderModule } from './components/expander/expander.module.ts.old';
import { Expander } from './components/expander/expander';

@Component({
  selector: 'app-root',
  imports: [Expander, Icon],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
