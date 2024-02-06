import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { Departamento } from 'src/app/models/departamento';

import { ServiceDepartamentos } from 'src/app/services/service.departamentos';
import { Router } from '@angular/router';


@Component({
  selector: 'app-insertdepartamento',
  templateUrl: './insertdepartamento.component.html',
  styleUrls: ['./insertdepartamento.component.css']
})
export class InsertdepartamentoComponent {

  @ViewChild("cajaid") cajaIdRef !: ElementRef;
  @ViewChild("cajanombre") cajaNombreRef !: ElementRef;
  @ViewChild("cajalocalidad") cajaLocalidadRef !: ElementRef;

  constructor(
    private _serviceDepartamentos: ServiceDepartamentos,
    private _router: Router
  ){}

  insertarDepartamento(): void{
    var num = parseInt(this.cajaIdRef.nativeElement.value);
    var nom = this.cajaNombreRef.nativeElement.value;
    var loc = this.cajaLocalidadRef.nativeElement.value;

    var newDept = new Departamento(num,nom,loc);
    console.log(newDept)
    this._serviceDepartamentos.create(newDept).subscribe((result)=>{
      this._router.navigate(["/"])
    })

  }
}
