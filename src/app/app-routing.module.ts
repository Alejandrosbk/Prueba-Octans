import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarUsuarioComponent } from './components/agregar-usuario/agregar-usuario.component';
import { ListarUsuarioComponent } from './components/listar-usuario/listar-usuario.component';
import { EditarUsuarioComponent } from './components/editar-usuario/editar-usuario.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  { path:'',pathMatch:'full', redirectTo:'listar-usuario' },
  { path:'listar-usuario', component:ListarUsuarioComponent },
  { path:'editar-usuario/:id', component:EditarUsuarioComponent },
  { path:'search/:termino', component:SearchComponent },
  { path:'agregar-usuario', component:AgregarUsuarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
