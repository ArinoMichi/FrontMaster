import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Importa FormsModule

import { AppComponent } from './app.component';
import { EmpleadosapiComponent } from './components/empleadosapi/empleadosapi.component';
import {HttpClientModule} from '@angular/common/http'
import { ServiceEmpleados } from './services/service.empleados';
import { FuncionesempleadosComponent } from './components/funcionesempleados/funcionesempleados.component';
import { HomeComponent } from './components/home/home.component';

import { routing } from './app.routing';
import { RouterModule } from '@angular/router';
import { MenucomponentComponent } from './components/menucomponent/menucomponent.component';
import { SeleccionfuncionescomponentComponent } from './components/seleccionfuncionescomponent/seleccionfuncionescomponent.component';  // Asegúrate de importar RouterModule


@NgModule({
  declarations: [
    AppComponent,
    EmpleadosapiComponent,
    FuncionesempleadosComponent,
    HomeComponent,
    MenucomponentComponent,
    SeleccionfuncionescomponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    RouterModule,
    FormsModule
  ],
  providers: [ServiceEmpleados],
  bootstrap: [AppComponent]
})
export class AppModule { }
