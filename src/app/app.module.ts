import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './componentes/app/app.component';
import { AgregarComponent } from './componentes/producto/agregar/agregar.component';
import { EditarComponent } from './componentes/producto/editar/editar.component';
import { ListarComponent } from './componentes/producto/listar/listar.component';
import { VerComponent } from './componentes/producto/ver/ver.component';
import { LoginComponent } from './componentes/login/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregarComponent,
    EditarComponent,
    ListarComponent,
    VerComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
