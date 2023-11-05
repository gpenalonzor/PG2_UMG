import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { RecuperarPasswordComponent } from './recuperar-password/recuperar-password.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    InicioSesionComponent,
    CrearCuentaComponent,
    RecuperarPasswordComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    InicioSesionComponent,
    CrearCuentaComponent,
    RecuperarPasswordComponent
  ]
})
export class LoginModule { }
