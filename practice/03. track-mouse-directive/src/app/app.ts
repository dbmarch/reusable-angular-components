import { Component, signal } from '@angular/core';
import { TrackMouse } from './directives/track-mouse.directive';

@Component({
  selector: 'app-root',
  imports: [TrackMouse],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected x = signal(0);
  protected y = signal(0);

  updateX(x: number) {
    // console.log('X:', x);
    this.x.set(x);
  }

  updateY(y: number) {
    // console.log('Y:', y);
    this.y.set(y);
  }
}
