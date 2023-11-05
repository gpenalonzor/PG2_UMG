
import { Component, ViewChild } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-Alumno',
  templateUrl: './Alumno.component.html',
  styleUrls: ['./Alumno.component.css']
})
export class AlumnoComponent {
  idExamen?: number;
  idCatedratico?: number;
  idGrado?: number;
  idSeccion?: number;
  idCurso?: number;
  Punteo?: number;
  Fecha_Inicio?: string;

  Fecha_Fin?: string;

  DescripcionExamen?: string;

  idCarnet?: string;
  nombre?: string;
  Direccion?: string;
  Tel?: string;
  Email?: string;
  yeat?: string


  mostrarDatos() {

  }



}
