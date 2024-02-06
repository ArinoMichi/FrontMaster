import { HomeComponent } from './components/home/home.component';
import { LibreriaComponent } from './components/libreria/libreria.component';
import { Routes, RouterModule } from '@angular/router';
import { PersonasapiComponent } from './components/personasapi/personasapi.component';
import { CochesapiComponent } from './components/cochesapi/cochesapi.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'comics', component: LibreriaComponent },
  { path: 'personas', component: PersonasapiComponent },
  { path: 'coches', component: CochesapiComponent },
];

export const routing = RouterModule.forRoot(appRoutes);
