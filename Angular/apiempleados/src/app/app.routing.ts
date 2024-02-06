import { HomeComponent } from "./components/home/home.component";
import { EmpleadosapiComponent } from "./components/empleadosapi/empleadosapi.component";
import { Routes, RouterModule } from '@angular/router';
import { SeleccionfuncionescomponentComponent } from "./components/seleccionfuncionescomponent/seleccionfuncionescomponent.component";


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path:'empleados/:funcion', component:EmpleadosapiComponent},
    { path:'empleadosselect', component: SeleccionfuncionescomponentComponent}
    
  ];
  
  export const routing = RouterModule.forRoot(appRoutes);