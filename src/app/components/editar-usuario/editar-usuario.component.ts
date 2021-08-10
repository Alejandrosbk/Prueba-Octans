import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {
  formularioUsuarios:FormGroup;

  // variable para recepcionar los datos que se van a editar
  idedit:any;

  constructor( private activeRoute:ActivatedRoute,
    public formulario:FormBuilder,
    private crudService:CrudService,
    private ruteador:Router ) { 

    // capturamos el id a editar mediante el metodo get 
    this.idedit=this.activeRoute.snapshot.paramMap.get('id');
      console.log(this.idedit);

    // usando el metodo para consultar o editar los datos
    this.crudService.ConsultarUsuario(this.idedit).subscribe(respuesta => {
      console.log(respuesta);

    // devolvemos los datos editados para volver a asignarlos
    this.formularioUsuarios.setValue({
      id:respuesta[0]['id'],
      nombre:respuesta[0]['nombre'],
      correo:respuesta[0]['correo']
      });
    });

    // capturar los datos al momento de ir a editar para editarlos
    this.formularioUsuarios=this.formulario.group({
        id:[''],
        nombre:[''],
        correo:['']
    });
  }

  ngOnInit(): void {
  }

  // volver a guardar los datos ya modificados
  enviarDatos(): any {
    console.log("Editaste los Datos");
    console.log(this.idedit);
    console.log(this.formularioUsuarios.value);
  
    if(window.confirm("Esta seguro de modificar los datos?")){
    // pasarle los datos mediante el servicio y ver que se actualize la info
    this.crudService.EditarUsuario(this.idedit,this.formularioUsuarios.value).subscribe(() => {
      // redirigir al usuario luego de actualizar los datos
      this.ruteador.navigateByUrl('/listar-usuario');
      });
    }
  }

}
