import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';
import { ServiceEmpleados } from 'src/app/services/service.empleados';

@Component({
  selector: 'app-seleccionfuncionescomponent',
  templateUrl: './seleccionfuncionescomponent.component.html',
  styleUrls: ['./seleccionfuncionescomponent.component.css']
})
export class SeleccionfuncionescomponentComponent implements OnInit {
  public funcionesDisponibles!: Array<string>;
  public funcionesSeleccionadas: Array<string> = [];
  public empleados!: Array<Empleado>;

  constructor(private _serviceEmpleados: ServiceEmpleados) {}

  ngOnInit(): void {
    this._serviceEmpleados.getFunciones().then((result) => {
      this.funcionesDisponibles = result;
    });
    
    // Inicializa empleados para evitar errores en la plantilla HTML
    this.empleados = [];
  }

  onFuncionesSelectChange() {
    this.llamarFuncion();
    console.log(this.funcionesSeleccionadas)
  }

  private llamarFuncion() {
    this._serviceEmpleados.getEmpleadosPorFunciones(this.funcionesSeleccionadas).then((result) => {
      // Aquí puedes manejar el resultado de la llamada a la función
      this.empleados = result;
    });
  }
}
