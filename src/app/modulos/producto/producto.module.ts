import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import {AgregarComponent} from '../../componentes/producto/agregar/agregar.component';
import {EditarComponent} from '../../componentes/producto/editar/editar.component';
import {ListarComponent} from '../../componentes/producto/listar/listar.component';
import {VerComponent} from '../../componentes/producto/ver/ver.component';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatIcon, MatInputModule, MatTableModule} from '@angular/material';
import {CategoriaService} from '../../servicios/categoria.service';
import {ProductoService} from '../../servicios/producto.service';


@NgModule({
  declarations: [
    AgregarComponent,
    EditarComponent,
    ListarComponent,
    VerComponent,
    MatIcon
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule
  ],
  providers: [
    CategoriaService,
    ProductoService
  ]
})
export class ProductoModule { }
