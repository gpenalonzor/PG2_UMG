import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CrearTareaComponent } from './crear-tarea/crear-tarea.component';
import { Observable } from 'rxjs';
import { Tarea } from './Modelo/Tarea';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  //Esta URL obtine todas las tareas de la BD del Backend
  private baseURL = "http://localhost:8080/api/v1/tareas";

  constructor( private httpClient : HttpClient) { }

  //Este metodo nos sirve para obtener las tareas
  obtenerListaDeTareas():Observable<CrearTareaComponent[]>{
    return this.httpClient.get<CrearTareaComponent[]> ( `${this.baseURL}`);
  }

  //con este metodo guardamos una tarea
  guardartarea (tarea:Tarea) : Observable<Object> {
    return this.httpClient.post( `${this.baseURL}`,tarea);
 }

  //con este metodo actualizamos una tara
actualizarTareaID (id:number, tarea : Tarea): Observable<Object> {
  return this.httpClient.put(`${this.baseURL}/${id}`, Tarea)
}

 //con este metodo obtenemos por id una tarea en especifico
 obtenerTareaporID (id:number): Observable<Tarea> {
  return this.httpClient.get<Tarea> (`${this.baseURL}/${id}`);
 }

 //Con este metodo Eliminamos una tarea por ID
 eliminarTareaID (id:number):Observable<Object> {
  return this.httpClient.delete(`${this.baseURL}/${id}`);
 }


 }
