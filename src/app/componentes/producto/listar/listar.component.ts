import { Component, OnInit } from '@angular/core';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {Producto} from '../../../modelos/producto';
import {Router} from '@angular/router';
import {ProductoService} from '../../../servicios/producto.service';
import {CategoriaService} from '../../../servicios/categoria.service';
import {UsuarioService} from '../../../servicios/usuario.service';
import {DialogoComponent} from '../../dialogo/dialogo.component';

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
    private usuarioService: UsuarioService,
    public dialog: MatDialog
  ) {
  }

  ngOnInit() {

    this.categoriaService.getCategoriaU(this.usuarioService.getUsuario().id);
    // console.log('categorias -- ' + this.categoriaService.getListaC());
    // @ts-ignore
    this.productoService.getProductos();

    this.cargarProductor();
  }

  openDialog(nombreP: string, idP: number): void {
    const dialogRef = this.dialog.open(DialogoComponent, {
      width: '250px',
      data: {
        nombre: nombreP,
        id: idP
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      setTimeout(() => {
        // console.log('resultado de eliminar ' + result);
        if (result) {
          this.categoriaService.getCategoriaU(this.usuarioService.getUsuario().id);
          // @ts-ignore
          this.productoService.getProductos();
          this.cargarProductor();
          this.router.navigateByUrl('/producto/listar');
        }
        this.productoService.resultado = false;
      }, 0);
    });
  }

  cargarProductor() {
    setTimeout(() => {
      this.elementos = this.productoService.mostrarProductos();
      // console.log('elementos ' + this.elementos);
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
    this.productoService.getProducto(id);
    this.router.navigateByUrl('/producto/ver');
  }

  eliminar(id: number) {
    this.productoService.getProducto(id);
    setTimeout(() => {
      this.openDialog(this.productoService.mostrarProducto().nombre, this.productoService.mostrarProducto().id);
    }, 500);
    // console.log('eliminar producto ' + id);

  }
}
