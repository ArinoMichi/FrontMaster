import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import {HttpClientModule} from '@angular/common/http'

import { ServiceTienda } from './services/service.tienda';
import { routing , appRoutingProvider} from './app.routing';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenucomponentComponent } from './components/menucomponent/menucomponent.component';
import { DetallescuboComponent } from './components/detallescubo/detallescubo.component';
import { CubosmarcaComponent } from './components/cubosmarca/cubosmarca.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { ComprasComponent } from './components/compras/compras.component';
import { RealizarcompraComponent } from './components/realizarcompra/realizarcompra.component';
import { ComentariosComponent } from './components/comentarios/comentarios.component';
import { DetallesuserComponent } from './components/detallesuser/detallesuser.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenucomponentComponent,
    DetallescuboComponent,
    CubosmarcaComponent,
    LoginComponent,
    RegistrarseComponent,
    ComprasComponent,
    RealizarcompraComponent,
    ComentariosComponent,
    DetallesuserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    RouterModule,
    FormsModule
  ],
  providers: [appRoutingProvider, ServiceTienda],
  bootstrap: [AppComponent]
})
export class AppModule { }
