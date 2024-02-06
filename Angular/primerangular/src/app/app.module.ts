import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PrimerComponent } from 'src/components/primercomponent/primer.component';
import { HooksAngular } from 'src/components/hooksangular/hooksangular.component';
import { DeportesComponent } from 'src/components/deportes/deportes.component';
import { FormsModule } from '@angular/forms';
import { FormsBindingComponent } from 'src/components/formsbinding/formsbinding.component';
import { SumarNumerosComponent } from 'src/components/sumarnumeros/sumarnumeros.component';
import { TablaMultiplicar } from 'src/components/tablamultiplicar/tablamultiplicar.component';
import { TablaMultiplicar2Component } from 'src/components/tablamultiplicar2/tablamultiplicar2.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimerComponent,
    HooksAngular,
    DeportesComponent,
    FormsBindingComponent,
    SumarNumerosComponent,
    TablaMultiplicar,
    TablaMultiplicar2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
