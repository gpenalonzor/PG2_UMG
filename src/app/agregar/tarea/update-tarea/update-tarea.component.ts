import { Component, OnInit } from '@angular/core';
import { TareaService } from '../tarea.service';
import { Tarea } from '../Modelo/Tarea';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-tarea',
  templateUrl: './update-tarea.component.html',
  styleUrls: ['./update-tarea.component.css']
})
export class UpdateTareaComponent implements OnInit {


  ida:number;

  editartarea : Tarea = new Tarea();

  constructor(private tareaservicio : TareaService , private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.ida = this.route.snapshot.params['ida'];
    this.tareaservicio.obtenerTareaporID(this.ida).subscribe (dato => {
      this.editartarea = dato;
      console.log(this.editartarea);
    });
  }

  onSubmit () {
    this.tareaservicio.actualizarTareaID(this.ida , this.editartarea).subscribe(dato => {
      console.log (this.editartarea);
    });
  }

  irAlaListaDeTareas(){
    this.router.navigate(['/Read-Tareas']);
  }

  }
