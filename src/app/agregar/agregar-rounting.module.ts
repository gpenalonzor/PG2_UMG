import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAgregarComponent } from './home-agregar/home-agregar.component';
import { GradoComponent } from './grado/grado.component';
import { CtcursoComponent } from './ctcurso/ctcurso.component';
import { NotaalumnoComponent } from './notaalumno/notaalumno.component';
import { AlumnoComponent } from './Alumno/Alumno.component';
import { CatedraticoComponent } from './catedratico/catedratico.component';
import { CtexamenComponent } from './ctexamen/CtexamenComponent';
import { ListarTareaComponent } from './tarea/listar-tarea/listar-tarea.component';
import { CrearTareaComponent } from './tarea/crear-tarea/crear-tarea.component';
import { UpdateTareaComponent } from './tarea/update-tarea/update-tarea.component';
import { DeleteTareaComponent } from './tarea/delete-tarea/delete-tarea.component';



const routes: Routes = [
  {path: ''      ,  component: HomeAgregarComponent},
  {path: 'Agregar-Grado', component: GradoComponent},
  {path: 'Agregar-Curso', component: CtcursoComponent},
  {path: 'Agregar-Notas', component: NotaalumnoComponent},
  {path: 'Agregar-Alumno', component: AlumnoComponent},
  {path: 'Agregar-Catedratico' , component: CatedraticoComponent},
  {path: 'Agregar-Examen', component: CtexamenComponent},
  {path: 'Create-Tareas' , component: CrearTareaComponent},
  {path: 'Read-Tareas', component: ListarTareaComponent},
  {path: 'Update-Tareas/:id', component:UpdateTareaComponent},
  {path: 'Delete-Tareas', component:DeleteTareaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgregarRoutingmodule { }
