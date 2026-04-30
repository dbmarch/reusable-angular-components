import { Component } from '@angular/core';
import { Icon } from './components/icon/icon';
import { ExpanderModule } from './components/expander/expander.module';

@Component({
  selector: 'app-root',
  imports: [ExpanderModule, Icon],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
