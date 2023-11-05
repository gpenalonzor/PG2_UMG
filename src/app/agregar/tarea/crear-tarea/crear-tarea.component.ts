import { Component, OnInit } from '@angular/core';
import { TareaService } from '../tarea.service';
import { Tarea } from '../Modelo/Tarea';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-tarea',
  templateUrl: './crear-tarea.component.html',
  styleUrls: ['./crear-tarea.component.css']
})



export class CrearTareaComponent implements OnInit {

  Agregar_Tarea: Tarea = new Tarea();

  constructor(private tareaservicio: TareaService, private router: Router) { }

  ngOnInit(): void {

  }


  Listar_Tareas() {
    this.router.navigate(["Read-Tareas"])
  }

  Guardar_Tareas (){
    this.tareaservicio.guardartarea(this.Agregar_Tarea).subscribe (
      dato => {
        console.log(dato);
        this.Listar_Tareas();
      }, error => console.log(error)
    );
  }

  onSubmit() {
    this.Guardar_Tareas();
  }


  ida = 0;
  catedratico = '';
  grado = '';
  seccion = '';
  descripcion = '';
  puntuacion = 0;
  fecha_entrega = '';




}

