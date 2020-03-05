import { Component, OnInit } from '@angular/core';
import {Producto} from '../../../modelos/producto';
import {Categoria} from '../../../modelos/categoria';
import {FormBuilder, Validators} from '@angular/forms';
import {CategoriaService} from '../../../servicios/categoria.service';
import {ProductoService} from '../../../servicios/producto.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {


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

  guardar() {
    if (this.productoForm.valid) {
      // console.log(this.loginForm.value.usuario);
      this.productoNuevo.nombre = this.productoForm.value.nombre;
      this.productoNuevo.porcentaje = Number(this.productoForm.value.porcentaje);
      this.productoNuevo.precio = Number(this.productoForm.value.precio);
      this.productoNuevo.cantidad = Number(this.productoForm.value.cantidad);
      this.productoNuevo.id_categoria = Number(this.productoForm.value.categoria);
      this.productoService.actualizar(this.productoNuevo);
      setTimeout(() => {
        // console.log('valor de rta ---- ' + this.productoService.resultado);
        if (this.productoService.resultado) {
          this.esInvalidoForm = false;
          this.editado = true;
          this.onResetForm();
        } else {
          this.onResetForm();
          this.esInvalidoForm = true;
        }
      }, 500);

      setTimeout(() => {
        this.editado = false;
        this.productoService.resultado = false;
      }, 10000);

    } else {
      this.esInvalidoForm = true;
    }
  }

  volver() {
    this.router.navigateByUrl('/producto/listar');
  }

}
