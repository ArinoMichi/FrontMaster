import { Component, OnInit} from '@angular/core';
import { ServiceEmpleados } from 'src/app/services/service.empleados';

@Component({
  selector: 'app-funcionesempleados',
  templateUrl: './funcionesempleados.component.html',
  styleUrls: ['./funcionesempleados.component.css']
})
export class FuncionesempleadosComponent implements OnInit{
  public funciones !: Array<string>;
  constructor(private _serviceEmpleados: ServiceEmpleados) {}
  ngOnInit(): void {
    this._serviceEmpleados.getFunciones().then((result)=>{
      this.funciones=result;
    })
  }

}
