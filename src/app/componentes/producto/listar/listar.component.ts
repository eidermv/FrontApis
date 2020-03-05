import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {Producto} from '../../../modelos/producto';
import {Router} from '@angular/router';
import {ProductoService} from '../../../servicios/producto.service';
import {CategoriaService} from '../../../servicios/categoria.service';
import {UsuarioService} from '../../../servicios/usuario.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  elementos: Producto[] = [];
// id_producto, nombre, porcentaje_ganancia, precio, cantidad, id_categoria
  displayedColumns: string[] = ['id', 'nombre', 'porcentaje', 'precio', 'cantidad', 'categoria', 'opciones'];
  dataSource: MatTableDataSource<Producto>;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(
    private router: Router,
    private productoService: ProductoService,
    private categoriaService: CategoriaService,
    private usuarioService: UsuarioService
  ) {
  }

  ngOnInit() {

    this.categoriaService.getCategoriaU(this.usuarioService.getUsuario().id);
    console.log('categorias -- ' + this.categoriaService.getListaC());
    // @ts-ignore
    this.productoService.getProductos();

    this.cargarProductor();
  }

  cargarProductor() {
    setTimeout(() => {
      this.elementos = this.productoService.mostrarProductos();
      console.log('elementos ' + this.elementos);
      this.dataSource = new MatTableDataSource(this.elementos);
    }, 500);

  }

  agregar() {
    this.router.navigateByUrl('/producto/agregar');
  }

  editar(id: number) {
    this.productoService.getProducto(id);
    this.router.navigateByUrl('/producto/editar');
  }

  ver(id: number) {

    this.router.navigateByUrl('/producto/ver');
  }

  eliminar(id: number) {
    console.log('eliminar producto ' + id);

  }
}
