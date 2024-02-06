import { HomeComponent } from './components/home/home.component';
//NECESITAMOS LOS SIGUIENTES MODULOS PARA REALIZAR LA DECLARACION
//DE NAVEGACION
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { InsertdepartamentoComponent } from './components/insertdepartamento/insertdepartamento.component';
import { EditdepartamentoComponent } from './components/editdepartamento/editdepartamento.component';
import { EmpleadostablaComponent } from './components/empleadostabla/empleadostabla.component';
//DEFINIMOS UN ARRAY CON NUESTRAS RUTAS PARA LOS COMPONENTS
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'crear', component: InsertdepartamentoComponent },
  { path: 'edit/:id/:nombre/:localidad', component: EditdepartamentoComponent },
  { path: 'empleados', component: EmpleadostablaComponent },
];
//DESDE ROUTING DEBEMOS EXPORTAR DOS CARACTERISTICAS PARA IMPLEMENTARLAS
//DENTRO DEL MODULE
//EL PROVEEDOR DE RUTAS
export const appRoutingProvider: any[] = [];
//EL MODULO ROUTING INDICANDO EL ARRAY DE RUTAS DECLARADO
export const routing: ModuleWithProviders<any> =
  RouterModule.forRoot(appRoutes);
