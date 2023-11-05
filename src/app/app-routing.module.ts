import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioSesionComponent } from './login/inicio-sesion/inicio-sesion.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Ruta raíz que carga InicioSesionComponent
  { path: 'Inicio-Sesion' , component: InicioSesionComponent},
  { path: 'Agregar' , loadChildren: () => import ('./agregar/agregar.module').then(m => m.AgregarModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
