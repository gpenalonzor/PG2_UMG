import { Component, ViewChild } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-catedratico',
  templateUrl: './catedratico.component.html',
  styleUrls: ['./catedratico.component.css']
})



export class CatedraticoComponent {
  @ViewChild('catedraticoForm')
  catedraticoForm!: NgForm;
  public registro: number = 1;
  public catedratico: any[] = [];
  public nombre_catedratico: string='';
  public apellido_catedratico: string='';
  public fecha_nac_catedratico: Date = new Date();
  public nacionalidad_catedratico: string='';
  public cui_catedratico: number=0;
  public rol_catedratico: string='';
  public sexo_catedratico: string='';
  router: any;

  agregarCatedratico(){
  const nuevoCatedratico = {
    id_catedratico: this.registro,
    nombre_catedratico: this.nombre_catedratico,
    apellido_catedratico: this.apellido_catedratico,
    fecha_nac_catedratico: this.fecha_nac_catedratico,
    nacionalidad_catedratico: this.nacionalidad_catedratico,
    cui_catedratico: this.cui_catedratico,
    rol_catedratico: this.rol_catedratico,
    sexo_catedratico: this.sexo_catedratico
  }
  this.catedratico.push(nuevoCatedratico);
  this.registro++;
  this.catedraticoForm.reset();
  }

  modificarCatedratico(){

  }

  eliminarCatedratico(catedratico: any) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Deseas eliminar esta fila?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        const index = this.catedratico.indexOf(catedratico);
        if (index !== -1) {
          this.catedratico.splice(index, 1); // Elimina el catedrático del array
          Swal.fire('Eliminado', 'La fila ha sido eliminada', 'success');
        }
      }
      });
  }
}
