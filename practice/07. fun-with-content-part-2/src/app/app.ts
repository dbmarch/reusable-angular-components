import { Component } from '@angular/core';
import { ExpanderComponent } from './components/expander/expander';
import { Blank } from './components/blank/blank';

@Component({
  selector: 'app-root',
  imports: [ExpanderComponent, Blank],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
