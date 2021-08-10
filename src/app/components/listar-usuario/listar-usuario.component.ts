import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {
  // variable para guardar los datos
  Usuarios:any;

  constructor( private crudService:CrudService ) { }

  ngOnInit(): void {
    // usar el servicio para obtener datos y almacenarlos
    this.crudService.ObtenerUsuario().subscribe(respuesta => {
      console.log(respuesta);
      this.Usuarios=respuesta;
    });
  }

  // metodo para borrar el registro de la api y la BD
  borrarRegistro(id:any,iControl:any) {
    console.log(id);
    console.log(iControl);

    // efectuamos la eliminacion del registro en la bd y la vista
    if(window.confirm("Esta seguro de borrar el registro?")) {
      this.crudService.BorrarUsuario(id).subscribe((respuesta) => {
        this.Usuarios.splice(iControl,1);
      });
    }
  }
}
