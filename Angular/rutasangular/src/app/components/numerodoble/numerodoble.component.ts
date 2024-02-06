import { Component, OnInit } from '@angular/core';

//NECESITAMOS UNA SERIE DE CLASES PARA RECUPERAR LOS PARAMETROS DE LA RUTA

import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-numerodoble',
  templateUrl: './numerodoble.component.html',
  styleUrls: ['./numerodoble.component.css']
})
export class NumerodobleComponent implements OnInit {

  //DECLARAMOS VARIABLES PARA NUESTRO DIBUJO
  public numero !: number;
  public doble !: number;

  //ESTO ES EL OBJETO QUE VIENE INYECTADO DESDE MODULE
  constructor(private _activeRoute: ActivatedRoute, private _router: Router) {

  }

  goToHome(): void{
    this._router.navigate(["/"]);
  }

  redirect(num: number):void{
    this._router.navigate(["/numerodoble/", num])
  }


  ngOnInit(): void {
    //EN ESTE METODO ES DONDE DEBEMOS SUSCRIBIENOS A LA
    //RECEPCION DE LOS PARAMETROS DE ROUTING
    //SE UTILIZA EL OBJETO ActivatedRoute
    this._activeRoute.params.subscribe((parametros: Params) => {
      //DENTRO DE Params, SE RECUPERAN LOS NOMBRES DE PARAMETROS
      //CON LA SIGUIENTE SINTAXIS
      if (parametros["numero"] != null) {
        this.numero = parseInt(parametros['numero']);
        this.doble = this.numero * 2;
      }
    })
  }
}
