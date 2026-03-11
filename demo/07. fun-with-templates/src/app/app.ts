import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Repeater } from './components/repeater/repeater';

@Component({
  selector: 'app-root',
  imports: [CommonModule, Repeater],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
