import { Component } from '@angular/core';

@Component({
  selector: 'app-notaalumno',
  templateUrl: './notaalumno.component.html',
  styleUrls: ['./notaalumno.component.css']
})
export class NotaalumnoComponent {
  public idAsignacionAlumno:number = 0;
  public idTarea:number = 0;
  public idExamen:number = 0;
  public notaAlumno:number = 0;

  public midAsignacionAlumno:number = 0;
  public midTarea:number = 0;
  public midExamen:number = 0;
  public mnotaAlumno:number = 0;

  mostrarDatos():void{
    this.midAsignacionAlumno = this.idAsignacionAlumno,
    this.midTarea = this.idTarea,
    this.midExamen = this.idExamen,
    this.mnotaAlumno = this.notaAlumno
  }

  eliminarDatos():void{
    this.midAsignacionAlumno = 0,
    this.midTarea = 0,
    this.midExamen = 0,
    this.mnotaAlumno = 0
  }
}

