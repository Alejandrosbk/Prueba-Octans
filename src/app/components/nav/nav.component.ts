import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  // metodo que recibe el texto de la busqueda 
  buscarUsuario( termino: string ) {
    // validamos la cantidad de carecteres en la busqueda
    if ( termino.length < 1 ) {
      return;
    }

    this.router.navigate(['/search', termino])
    // console.log(termino);
  }
}
