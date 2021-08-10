import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor( private route: ActivatedRoute,
    public crudService: CrudService ) { }

  ngOnInit(): void {
    // leyendo los parametros que fueron ingresados en la barra de busqueda
    this.route.params
      .subscribe( params => {
        console.log(params['termino']);
        // llamamos al servicio del crud para enviar el termino de la busqueda
        this.crudService.BuscarUsuario( params['termino'] );
      });
  }

}
