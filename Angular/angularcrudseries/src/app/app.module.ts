import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { routing, appRoutingProvider } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ServiceSeries } from './services/service.series';
import { SeriesComponent } from './components/series/series.component';
import { DetallesserieComponent } from './components/detallesserie/detallesserie.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { ModificarpersonajeComponent } from './components/modificarpersonaje/modificarpersonaje.component';
import { InsertarpersonajeComponent } from './components/insertarpersonaje/insertarpersonaje.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    SeriesComponent,
    DetallesserieComponent,
    PersonajesComponent,
    ModificarpersonajeComponent,
    InsertarpersonajeComponent
  ],
  imports: [
    BrowserModule, routing, FormsModule,HttpClientModule
  ],
  providers: [appRoutingProvider, ServiceSeries],
  bootstrap: [AppComponent]
})
export class AppModule { }
