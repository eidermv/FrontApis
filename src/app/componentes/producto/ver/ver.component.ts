import { Component, OnInit } from '@angular/core';
import {Producto} from '../../../modelos/producto';
import {Categoria} from '../../../modelos/categoria';
import {FormBuilder, Validators} from '@angular/forms';
import {CategoriaService} from '../../../servicios/categoria.service';
import {ProductoService} from '../../../servicios/producto.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
  styleUrls: ['./ver.component.css']
})
export class VerComponent implements OnInit {



  private productoNuevo: Producto;
  private productoAntig: Producto;
  private categorias: Categoria[];
  private esInvalidoForm: boolean = false;

  productoForm = this.fb.group({
    nombre: ['', Validators.required],
    porcentaje: ['', Validators.required],
    precio: ['', Validators.required],
    cantidad: ['', Validators.required],
    categoria: ['', Validators.required]
  });
  /*
  id: number;
  nombre: string;
  porcentaje: number;
  precio: number;
  cantidad: number;
  // tslint:disable-next-line:variable-name
  id_categoria: number;
  categoria: string;
   */
  private editado: boolean = false;

  constructor(
    private categoriaService: CategoriaService,
    private productoService: ProductoService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.productoNuevo = new Producto();
    this.productoAntig = new Producto();
  }

  ngOnInit() {
    this.categorias = this.categoriaService.getListaC();
    this.productoAntig = this.productoService.mostrarProducto();
    this.productoForm.disable();
  }

  esValidoNombre() {
    return this.nombre.invalid && (this.nombre.dirty || this.nombre.touched);
  }

  esValidoPorcentaje() {
    return this.porcentaje.invalid && (this.porcentaje.dirty || this.porcentaje.touched);
  }

  esValidoCantidad() {
    return this.cantidad.invalid && (this.cantidad.dirty || this.cantidad.touched);
  }

  esValidoPrecio() {
    return this.precio.invalid && (this.precio.dirty || this.precio.touched);
  }

  esValidoCategoria() {
    return this.categoria.invalid && (this.categoria.dirty || this.categoria.touched);
  }

  onResetForm() {
    this.productoForm.reset();
  }

  get nombre() { return this.productoForm.get('nombre'); }
  get porcentaje() { return this.productoForm.get('porcentaje'); }
  get cantidad() { return this.productoForm.get('cantidad'); }
  get precio() { return this.productoForm.get('precio'); }
  get categoria() { return this.productoForm.get('categoria'); }



  volver() {
    this.router.navigateByUrl('/producto/listar');
  }

}
