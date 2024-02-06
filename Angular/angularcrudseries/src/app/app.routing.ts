import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { DetallesserieComponent } from './components/detallesserie/detallesserie.component';
import { InsertarpersonajeComponent } from './components/insertarpersonaje/insertarpersonaje.component';
import { ModificarpersonajeComponent } from './components/modificarpersonaje/modificarpersonaje.component';
import { PersonajesComponent } from './components/personajes/personajes.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {path:'detallesserie/:id', component: DetallesserieComponent},
  {path: 'nuevo', component: InsertarpersonajeComponent},
  {path: 'modificar', component:ModificarpersonajeComponent},
  {path: 'personajes/:id', component:PersonajesComponent}

];

export const appRoutingProvider: any[] = [];
//EL MODULO ROUTING INDICANDO EL ARRAY DE RUTAS DECLARADO
export const routing: ModuleWithProviders<any> =
  RouterModule.forRoot(appRoutes);
