import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DialogoData} from './dialogo-data';
import {ProductoService} from '../../servicios/producto.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dialogo',
  templateUrl: './dialogo.component.html',
  styleUrls: ['./dialogo.component.css']
})
export class DialogoComponent implements OnInit {
  private eliminado: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<DialogoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogoData,
    private productoService: ProductoService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  noClick(): void {
    this.dialogRef.close();
  }

  okClick(): void {
    this.productoService.eliminar(this.data.id);
    setTimeout(() => {
      this.eliminado = this.productoService.resultado;
    }, 500);
    setTimeout(() => {
      this.dialogRef.close(true);
    }, 5000);
  }
}
