import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-root',
  imports: [CommonModule, MatDatepickerModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  readonly locales = signal([
    'en-US',
    'fr-FR',
    'de-DE',
    'ja-JP',
    'he-IL',
    'ar-EG',
    'zh-CN'
  ]);

  readonly selectedLocale = signal(this.locales()[1]);

}
