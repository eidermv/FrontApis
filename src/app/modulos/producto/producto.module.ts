import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import {AgregarComponent} from '../../componentes/producto/agregar/agregar.component';
import {EditarComponent} from '../../componentes/producto/editar/editar.component';
import {ListarComponent} from '../../componentes/producto/listar/listar.component';
import {VerComponent} from '../../componentes/producto/ver/ver.component';


@NgModule({
  declarations: [
    AgregarComponent,
    EditarComponent,
    ListarComponent,
    VerComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ]
})
export class ProductoModule { }
