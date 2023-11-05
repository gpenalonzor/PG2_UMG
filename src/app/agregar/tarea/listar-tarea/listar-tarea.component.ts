import { Component, OnInit } from '@angular/core';
import { TareaService } from '../tarea.service';
import { Tarea } from '../Modelo/Tarea';
import { Route, Router } from '@angular/router';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-listar-tarea',
  templateUrl: './listar-tarea.component.html',
  styleUrls: ['./listar-tarea.component.css']
})
export class ListarTareaComponent implements OnInit {

  constructor (private tareaservicio : TareaService, private router:Router) {}

  tablaValores: Tarea[] =[];

  ngOnInit(): void {
   this.obtenerTareas();
  }

  private obtenerTareas () {
    this.tareaservicio.obtenerListaDeTareas().subscribe(dato => {
      this.tablaValores = dato;
    })
  }

  ir_nueva_tarea (){
    this.router.navigate (["Create-Tareas"])
  }

  actualizarTarea(id:number){
    this.router.navigate(["Update-Tareas", id]);
  }

  eliminarTarea (id:number){
    this.tareaservicio.eliminarTareaID(id).subscribe(dato => {
      console.log(dato);
      this.obtenerTareas();
    } );
  }



}
