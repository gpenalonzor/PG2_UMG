import { Component } from '@angular/core';
import { Examen } from './examen';


@Component({
  selector: 'app-mi-componente',
  templateUrl: './ctexamen.component.html',
  styleUrls: ['./ctexamen.component.css']
})

export class CtexamenComponent {

  miExamen: Examen = {
    idExamen: 0,
    idCatedratico: 0,
    idGrado: 0,
    idSeccion: 0,
    idCurso: 0,
    Punteo: '',
    Fecha_Inicio: '',
    Fecha_Fin: '',
    DescripcionExamen: '',
  }
    ;

  elementos: Examen[] = [];


  mostrarDatos() {

  }

  agregar() {
    this.elementos.push(this.miExamen);
  }

  editar(ExamenActualizar: Examen) {
    const index = this.elementos.findIndex((v) => v.idExamen === ExamenActualizar.idExamen);

  }
    // Lógica para editar el elemento en la posición 'index'


  eliminar(ExamenEliminar: Examen) {
    const index = this.elementos.indexOf(ExamenEliminar);
    if (index !== -1) {
      this.elementos.splice(index, 1);
    }// Elimina el elemento en la posición 'index'
  }
}
