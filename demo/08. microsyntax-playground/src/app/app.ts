import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, MatDatepickerModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  readonly locales = signal([
    'en-US',
    'en-GB',
    'fr-FR',
    'de-DE',
    'ja-JP'
  ]);

  readonly selectedLocale = signal(this.locales()[1]);

}
