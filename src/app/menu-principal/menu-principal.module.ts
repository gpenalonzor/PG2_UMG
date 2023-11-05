import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NvarComponent } from './nvar/nvar.component';
import { PantallaPrincipalComponent } from './pantalla-principal/pantalla-principal.component';
import { Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: PantallaPrincipalComponent }, // Ruta predeterminada de 'pantalla-principal'
];


@NgModule({
  declarations: [
    NvarComponent,
    PantallaPrincipalComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NvarComponent,
    PantallaPrincipalComponent
  ]
})
export class MenuPrincipalModule { }
