import { NgForm, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GradoComponent } from './grado/grado.component';
import { HomeAgregarComponent } from './home-agregar/home-agregar.component';
import { AgregarRoutingmodule } from './agregar-rounting.module';
import { MenuagregarComponent } from './menu-agregar/menu-agregar.components';
import { CtcursoComponent } from './ctcurso/ctcurso.component';
import { NotaalumnoComponent } from './notaalumno/notaalumno.component';
import { AlumnoComponent } from './Alumno/Alumno.component';
import { CatedraticoComponent } from './catedratico/catedratico.component';
import { CtexamenComponent } from './ctexamen/CtexamenComponent';
import { HttpClientModule } from '@angular/common/http';
import { TareaService } from './tarea/tarea.service';
import { ListarTareaComponent } from './tarea/listar-tarea/listar-tarea.component';
import { CrearTareaComponent } from './tarea/crear-tarea/crear-tarea.component';
import { DeleteTareaComponent } from './tarea/delete-tarea/delete-tarea.component';
import { UpdateTareaComponent } from './tarea/update-tarea/update-tarea.component';



@NgModule({
  declarations: [
    GradoComponent,
    HomeAgregarComponent,
    MenuagregarComponent,
    CtcursoComponent,
    NotaalumnoComponent,
    CatedraticoComponent,
    AlumnoComponent,
    CtexamenComponent,
    ListarTareaComponent,
    CrearTareaComponent,
    DeleteTareaComponent,
    UpdateTareaComponent
  ],
  providers: [TareaService],
  imports: [
    CommonModule,
    AgregarRoutingmodule,
    FormsModule,
    HttpClientModule
  ] ,

  exports:[
    GradoComponent,
    HomeAgregarComponent,
    MenuagregarComponent,
    CtcursoComponent,
    NotaalumnoComponent,
    CatedraticoComponent,
    AlumnoComponent,
    CtexamenComponent
  ]
})
export class AgregarModule { }
