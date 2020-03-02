import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './componentes/login/login/login.component';
import {AgregarComponent} from './componentes/producto/agregar/agregar.component';
import {EditarComponent} from './componentes/producto/editar/editar.component';
import {ListarComponent} from './componentes/producto/listar/listar.component';
import {VerComponent} from './componentes/producto/ver/ver.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'producto/agregar', component: AgregarComponent},
  {path: 'producto/editar', component: EditarComponent},
  {path: 'producto/listar', component: ListarComponent},
  {path: 'producto/ver', component: VerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
