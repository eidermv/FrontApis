import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import {AgregarComponent} from '../../componentes/producto/agregar/agregar.component';
import {EditarComponent} from '../../componentes/producto/editar/editar.component';
import {ListarComponent} from '../../componentes/producto/listar/listar.component';
import {VerComponent} from '../../componentes/producto/ver/ver.component';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIcon,
  MatInputModule, MatPaginatorIntl, MatPaginatorModule,
  MatSelectModule,
  MatTableModule
} from '@angular/material';
import {CategoriaService} from '../../servicios/categoria.service';
import {ProductoService} from '../../servicios/producto.service';
import {ReactiveFormsModule} from '@angular/forms';
import {DialogoComponent} from '../../componentes/dialogo/dialogo.component';
import {MyMatPaginatorInt} from '../../componentes/producto/listar/my-mat-paginator-int';


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
        MatTableModule,
        MatSelectModule,
        ReactiveFormsModule,
        MatPaginatorModule
    ],
  providers: [
    CategoriaService,
    ProductoService,
    { provide: MatPaginatorIntl, useClass: MyMatPaginatorInt}
  ]
})
export class ProductoModule { }
