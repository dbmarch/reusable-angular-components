import { Component, signal } from '@angular/core';
import { Capitalize } from './directives/capitalize';

@Component({
  selector: 'app-root',
  imports: [Capitalize],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
