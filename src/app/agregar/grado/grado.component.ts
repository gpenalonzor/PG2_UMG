import { Component } from '@angular/core';
import Swal from 'sweetalert2';


interface Tarea {
  valorIdentificadorGrado: string;
  valorGrado: string;
  valorCatedraticoGuia: string;
  valorSeccion: string;
  valorcomentario: string;
  valorCupoAlumnos: number;
}

@Component({
  selector: 'app-grado',
  templateUrl: './grado.component.html',
  styleUrls: ['./grado.component.css']
})
export class GradoComponent {

  valorIdentificadorGrado = '';
  valorGrado = '';
  valorCatedraticoGuia = '';
  valorSeccion ='';
  valorcomentario ='';
  valorCupoAlumnos = 0;

  tablaValores: Tarea[] =[];

  AgregarValoresTabla () {
    this.tablaValores.push ({
      valorIdentificadorGrado: this.valorIdentificadorGrado,
      valorGrado: this.valorGrado,
      valorCatedraticoGuia: this.valorCatedraticoGuia,
      valorSeccion : this.valorSeccion,
      valorcomentario : this.valorcomentario,
      valorCupoAlumnos : this.valorCupoAlumnos,
    });
      // Limpia los campos después de agregar los valores
     this.valorIdentificadorGrado = '';
     this.valorGrado = '';
     this.valorCatedraticoGuia = '';
     this.valorSeccion = '';
     this.valorcomentario = '';
     this.valorCupoAlumnos = 0;
  }


  eliminarFila(index: number) {
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
        // Elimina el elemento en el índice proporcionado del arreglo tablaValores
        this.tablaValores.splice(index, 1);
        Swal.fire('Eliminado', 'La fila ha sido eliminada', 'success');
      }
    });
  }

 }
