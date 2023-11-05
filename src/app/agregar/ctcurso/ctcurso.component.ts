import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ctcurso',
  templateUrl: './ctcurso.component.html',
  styleUrls: ['./ctcurso.component.css']
})
export class CtcursoComponent {
  public idCurso:number = 0;
  public nombreCurso:string = '';
  public descripcionCurso:string ='';

  public midCurso:number = 0;
  public mnombreCurso:string = '';
  public mdescripcionCurso:string ='';

  mostrarDatos():void{
    this.midCurso = this.idCurso,
    this.mnombreCurso = this. nombreCurso,
    this.mdescripcionCurso = this.descripcionCurso
  }

  eliminarDatos():void{
    this.midCurso = 0,
    this.mnombreCurso = '',
    this.mdescripcionCurso = ''
  }
}
