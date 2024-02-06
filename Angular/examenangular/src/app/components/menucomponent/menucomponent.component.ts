import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceTienda } from 'src/app/services/service.tienda';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-menucomponent',
  templateUrl: './menucomponent.component.html',
  styleUrls: ['./menucomponent.component.css']
})
export class MenucomponentComponent implements OnInit {
  public marcas !: Array<string>;
  constructor(private _serviceTienda: ServiceTienda, private router: Router) {}
  ngOnInit(): void {
    this._serviceTienda.getMarcas().subscribe((response)=>{
      this.marcas=response;
    })
  }
  limpiarToken(){
    console.log("Eliminando usuario...")
    console.log(environment.token)
    environment.token= "";
    console.log(environment.token)
    alert('sesion cerrada')
    this.router.navigate(['/']);
  }
}
