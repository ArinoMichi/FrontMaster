import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DetalleproductoComponent } from './components/detalleproducto/detalleproducto.component';
import { ListaproductosComponent } from './components/listaproductos/listaproductos.component';
import { PadrecochesComponent } from './components/padrecoches/padrecoches.component';
import { PadredeportesComponent } from './components/padredeportes/padredeportes.component';
import { LibreriaComponent } from './components/libreria/libreria.component';
import { DetallescomicComponent } from './components/detallescomic/detallescomic.component';

const appRoutes: Routes = [
    {
        path: "", component: ListaproductosComponent
    },
    {
        path: "deta/:num", component: DetalleproductoComponent
    },
    {
        path: "coches", component: PadrecochesComponent
    },
    {
        path: "depor", component: PadredeportesComponent
    },
    {
        path: "libreria", component: LibreriaComponent
    },
    {
        path: 'detalles/:comic', component: DetallescomicComponent
    }
]

export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> =
    RouterModule.forRoot(appRoutes);