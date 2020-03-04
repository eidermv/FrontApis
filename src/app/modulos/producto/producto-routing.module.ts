import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AgregarComponent} from '../../componentes/producto/agregar/agregar.component';
import {EditarComponent} from '../../componentes/producto/editar/editar.component';
import {ListarComponent} from '../../componentes/producto/listar/listar.component';
import {VerComponent} from '../../componentes/producto/ver/ver.component';
import {ControlGuard} from '../../servicios/control.guard';


const routes: Routes = [
  {path: 'agregar', component: AgregarComponent, canActivate: [ControlGuard]},
  {path: 'editar', component: EditarComponent, canActivate: [ControlGuard]},
  {path: 'listar', component: ListarComponent, canActivate: [ControlGuard]},
  {path: 'ver', component: VerComponent, canActivate: [ControlGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
