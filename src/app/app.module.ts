import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './componentes/app/app.component';
import { LoginComponent } from './componentes/login/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {ReactiveFormsModule} from '@angular/forms';
import {LoginService} from './servicios/login.service';

import { ProductoModule } from './modulos/producto/producto.module';

import {MatIcon, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule} from '@angular/material';

import { SesionService } from './servicios/sesion.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MatIcon
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    // MaterialModule,
    ProductoModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [
    LoginService,
    SesionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
