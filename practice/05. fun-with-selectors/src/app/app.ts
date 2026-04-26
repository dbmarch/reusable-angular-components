import { Component, signal } from '@angular/core';
import { Capitalize } from './directives/capitalize';
import { Tooltip } from './directives/tooltip';

@Component({
  selector: 'app-root',
  imports: [Capitalize, Tooltip],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
