import { HomeComponent } from './components/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DetallescuboComponent } from './components/detallescubo/detallescubo.component';
import { CubosmarcaComponent } from './components/cubosmarca/cubosmarca.component';
import { ComentariosComponent } from './components/comentarios/comentarios.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { ComprasComponent } from './components/compras/compras.component';
import { RealizarcompraComponent } from './components/realizarcompra/realizarcompra.component';
import { DetallesuserComponent } from './components/detallesuser/detallesuser.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {
      path: 'detallescubo/:id', component: DetallescuboComponent
    },
    {
      path: 'cubosmarca/:marca', component: CubosmarcaComponent
    },
    {
      path: 'comentarios/:id', component:ComentariosComponent
    },
    {
      path: 'login', component: LoginComponent
    },
    {
      path: 'registro', component: RegistrarseComponent
    },
    {
      path: 'compras', component:ComprasComponent
    },
    {
      path: 'realizarCompra', component: RealizarcompraComponent
    },
    {
      path: 'detallesuser', component: DetallesuserComponent
    }
  ];
  
  export const appRoutingProvider: any[] = [];
  //EL MODULO ROUTING INDICANDO EL ARRAY DE RUTAS DECLARADO
  export const routing: ModuleWithProviders<any> =
    RouterModule.forRoot(appRoutes);
