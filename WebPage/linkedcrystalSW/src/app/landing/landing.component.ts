import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  isGifVisible = false;

  showGif() {
    this.isGifVisible = true;

    // Después de 5 segundos, oculta el GIF
    setTimeout(() => {
      this.isGifVisible = false;
    }, 5000); // Tiempo durante el cual el GIF es visible
  }
}
