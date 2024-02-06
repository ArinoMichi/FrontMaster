import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { routing,appRoutingProvider } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { ServiceDepartamentos } from './services/service.departamentos';
import { InsertdepartamentoComponent } from './components/insertdepartamento/insertdepartamento.component';
import { EditdepartamentoComponent } from './components/editdepartamento/editdepartamento.component';
import { EmpleadostablaComponent } from './components/empleadostabla/empleadostabla.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    InsertdepartamentoComponent,
    EditdepartamentoComponent,
    EmpleadostablaComponent
  ],
  imports: [
    BrowserModule, routing, HttpClientModule,FormsModule
  ],
  providers: [appRoutingProvider, ServiceDepartamentos],
  bootstrap: [AppComponent]
})
export class AppModule { }
