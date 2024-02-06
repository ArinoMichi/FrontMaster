import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProvider } from './app.routing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListaproductosComponent } from './components/listaproductos/listaproductos.component';
import { DetalleproductoComponent } from './components/detalleproducto/detalleproducto.component';
import { PadrecochesComponent } from './components/padrecoches/padrecoches.component';
import { HijocochesComponent } from './components/hijocoches/hijocoches.component';
import { PadredeportesComponent } from './components/padredeportes/padredeportes.component';
import { HijodeportesComponent } from './components/hijodeportes/hijodeportes.component';
import { LibreriaComponent } from './components/libreria/libreria.component';
import { ComicComponent } from './components/comic/comic.component';
import { DetallescomicComponent } from './components/detallescomic/detallescomic.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaproductosComponent,
    DetalleproductoComponent,
    PadrecochesComponent,
    HijocochesComponent,
    PadredeportesComponent,
    HijodeportesComponent,
    LibreriaComponent,
    ComicComponent,
    DetallescomicComponent,
  ],
  imports: [
    BrowserModule, routing, FormsModule
  ],
  providers: [appRoutingProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
