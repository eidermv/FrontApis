import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AgregarComponent} from '../../componentes/producto/agregar/agregar.component';
import {EditarComponent} from '../../componentes/producto/editar/editar.component';
import {ListarComponent} from '../../componentes/producto/listar/listar.component';
import {VerComponent} from '../../componentes/producto/ver/ver.component';


const routes: Routes = [
  {path: 'agregar', component: AgregarComponent},
  {path: 'editar', component: EditarComponent},
  {path: 'listar', component: ListarComponent},
  {path: 'ver', component: VerComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
