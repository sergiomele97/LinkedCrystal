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
    console.log("Hola");

    // Espera a que el DOM se actualice antes de agregar la clase 'show'
    setTimeout(() => {
      const gifContainer = document.querySelector('.gif-container');
      if (gifContainer) {
        gifContainer.classList.add('show');

        // Espera 5 segundos y luego agrega la clase 'hide' para ocultar el GIF
        setTimeout(() => {
          gifContainer.classList.add('hide');
          // Después de que la animación de ocultamiento termine, oculta el elemento completamente
          setTimeout(() => {
            this.isGifVisible = false;
            gifContainer.classList.remove('show', 'hide');
          }, 1000); // Tiempo de transición de desaparición
        }, 5000); // Tiempo antes de ocultar (5 segundos)
      }
    }, 0); // Asegura que la clase 'show' se aplique después de cambiar 'isGifVisible'
  }
}
