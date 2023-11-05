import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imagenes: string[] = [
    'assets/img/imagen1.jpg',
    'assets/img/imagen2.jpg',
    'assets/img/imagen3.jpg',
    'assets/img/imagen4.jpg',
    'assets/img/imagen5.jpg',
    'assets/img/imagen6.jpg',
    // Agrega aquí más rutas de imágenes
  ];
  indice: number = 0;

  constructor() { }

  ngOnInit(): void {
    // Inicia la función para cambiar automáticamente las imágenes en bucle
    this.cambiarImagenAutomaticamente();
  }

  cambiarImagenAutomaticamente(): void {
    setInterval(() => {
      // Cambia la imagen actual
      this.indice = (this.indice + 1) % this.imagenes.length;
    }, 3000); // Cambia la imagen cada 3 segundos (3000 ms)
  }
}
