import { Component, signal } from '@angular/core';
import { Capitalize } from './directives/capitalize';
import { Tooltip } from './directives/tooltip';
import { CrazyButton } from './components/crazy-button/crazy-button';

@Component({
  selector: 'app-root',
  imports: [Capitalize, Tooltip, CrazyButton],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
