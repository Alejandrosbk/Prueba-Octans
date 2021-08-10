import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.css']
})
export class AgregarUsuarioComponent implements OnInit {

  formularioUsuarios:FormGroup;

  constructor( 
    public formulario:FormBuilder,
    private crudService:CrudService,
    private ruteador:Router ) { 
    this.formularioUsuarios=this.formulario.group({
      nombre:[''],
      correo:['']
    });
  }

  ngOnInit(): void {
  }

  enviarDatos(): any {
    // console.log("Agregaste Datos");
    // console.log(this.formularioUsuarios.value);
    // pasarle los datos mediante el servicio
    this.crudService.AgregarUsuario(this.formularioUsuarios.value).subscribe(respuesta => {
    // redirigir al usuario luego de enviar datos
    this.ruteador.navigateByUrl('/listar-usuario');
    });
  }
}
