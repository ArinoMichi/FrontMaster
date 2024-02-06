import { HomeComponent } from "./components/home/home.component";
import { MusicaComponent } from "./components/musica/musica.component";
import { CineComponent } from "./components/cine/cine.component";
import { Error404Component } from "./components/error404/error404.component";
import { NumerodobleComponent } from "./components/numerodoble/numerodoble.component";
import { CollatzComponent } from "./components/collatz/collatz.component";

//NECESITAMOS LOS SIGUIENTES MODULOS PARA REALIZAR LA DECLARACION
//DE NAVEGACION

import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

//DEFINIMOS UN ARRAY CON NUESTRAS RUTAS PARA LOS COMPONENTS
const appRoutes: Routes = [
    {
        path: "", component: HomeComponent
    },
    {
        path: "cine", component: CineComponent
    },
    {
        path: "musica", component:MusicaComponent
    },
    {
        path: "numerodoble", component:NumerodobleComponent
    },
    {
        path: "numerodoble/:numero", component:NumerodobleComponent
    },
    {
        path: "collatz/:numero", component:CollatzComponent
    },
    {
        path:"**", component:Error404Component
    },
]

//desde routing debemos importar dos caracteristicas para implemetarlas 
//dentro del module
//el proveedor de rutas
export const appRoutingProvider: any[] = [];
//el modulo routing indicando el array de rutas declarado
export const routing: ModuleWithProviders<any> =
RouterModule.forRoot(appRoutes);