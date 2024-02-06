import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';  // Asegúrate de importar RouterModule
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { LibreriaComponent } from './components/libreria/libreria.component';
import { ComicComponent } from './components/comic/comic.component';
import { ServiceComics } from './services/service.comics';
import { HomeComponent } from './components/home/home.component';
import { MenucomponentComponent } from './components/menucomponent/menucomponent.component';
import {HttpClientModule} from '@angular/common/http';
import { ServicePersonas } from './services/service.personas';
import { ServiceCoches } from './services/service.coches';
import { PersonasapiComponent } from './components/personasapi/personasapi.component';
import { CochesapiComponent } from './components/cochesapi/cochesapi.component';

@NgModule({
  declarations: [
    AppComponent,
    LibreriaComponent,
    ComicComponent,
    HomeComponent,
    MenucomponentComponent,
    PersonasapiComponent,
    CochesapiComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,  // Agrega RouterModule a la sección de imports
    routing,  // Importa las rutas configuradas
    HttpClientModule
  ],
  providers: [ServiceComics, ServicePersonas, ServiceCoches],
  bootstrap: [AppComponent]
})
export class AppModule { }
