import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { AbcDirective } from './abc.directive';

@Component({
  selector: 'app-root',
  imports: [CommonModule, AbcDirective],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
