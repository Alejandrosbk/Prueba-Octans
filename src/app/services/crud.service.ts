import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Usuario } from './usuarios'; 

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  // conexion a los datos
  API: string='http://localhost/empleados/'; // API CREADA EN PHP

  // arreglo vacio para recepcionar los usuarios buscados
  usuarios: Usuario[] = [];
  usuariosfiltrado: Usuario[] = [];

  constructor( private clienteHttp:HttpClient ) { }

  // metodo para enviar los datos del empleado obtenidos
  AgregarUsuario(datosUusario:Usuario):Observable<any> {
    return this.clienteHttp.post(this.API+"?insertar=1",datosUusario);
  }

  // metodo para capturar los datos agregados y listarlos
  ObtenerUsuario(){
    return this.clienteHttp.get(this.API);
  }

  // metodo para borrar los datos mediante el id
  BorrarUsuario(id:any):Observable<any> {
    return this.clienteHttp.get(this.API+"?borrar="+id);
  }

  // metodo para obtener los datos y editarlos
  ConsultarUsuario(id:any):Observable<any> {
    return this.clienteHttp.get(this.API+"?consultar="+id);
  }

  // metodo que edita los datos y los actualiza
  EditarUsuario(id:any, datosUsuario:any):Observable<any> {
    return this.clienteHttp.post(this.API+"?actualizar="+id,datosUsuario);
  }

  // metodo que va a mostrar los usuarios de la busqueda
  BuscarUsuario( termino:string ) {

    if ( this.usuarios.length === 0 ) {
      // esperar que se carguen los productos
  
    } else {
      // aplicar el filtro
    }
    this.usuariosfiltrado = this.usuarios.filter( usuario => {
      return true;
    });
    console.log(this.usuariosfiltrado);
    
  }
}
