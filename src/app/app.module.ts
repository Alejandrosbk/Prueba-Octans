import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavComponent } from './components/nav/nav.component';
import { AgregarUsuarioComponent } from './components/agregar-usuario/agregar-usuario.component';
import { ListarUsuarioComponent } from './components/listar-usuario/listar-usuario.component';
import { EditarUsuarioComponent } from './components/editar-usuario/editar-usuario.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AgregarUsuarioComponent,
    ListarUsuarioComponent,
    EditarUsuarioComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
