import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-collatz',
  templateUrl: './collatz.component.html',
  styleUrls: ['./collatz.component.css']
})
export class CollatzComponent implements OnInit {

  public numero !: number;
  public resultado !: number[];

  constructor(private _activeRoute: ActivatedRoute, private _router: Router) {

  } 
  generarCollatz(): Array<number> {
    var aux: number[] = [];
    var auxNum = this.numero;

    while (auxNum !== 1) {
      aux.push(auxNum);

      if (auxNum % 2 === 0) {
        auxNum = auxNum / 2;
      } else {
        auxNum = auxNum * 3 + 1;
      }
    }

    // Agrega el último número (que es 1) a la secuencia
    aux.push(1);

    return aux;
  }


  ngOnInit(): void {
    this._activeRoute.params.subscribe((parametros: Params) => {
      this.numero = parseInt(parametros["numero"]);
      this.resultado = this.generarCollatz();
    })
  }
}
