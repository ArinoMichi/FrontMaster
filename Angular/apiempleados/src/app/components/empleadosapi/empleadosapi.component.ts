import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Importa ActivatedRoute
import { Empleado } from 'src/app/models/empleado';
import { ServiceEmpleados } from 'src/app/services/service.empleados';

@Component({
  selector: 'app-empleadosapi',
  templateUrl: './empleadosapi.component.html',
  styleUrls: ['./empleadosapi.component.css'],
})
export class EmpleadosapiComponent implements OnInit {
  public empleados: Array<Empleado> = [];
  public funcion!: string; // Variable para almacenar el ID de la función desde la ruta
  public funcionesSeleccionadas: string[] = [];

  constructor(
    private _serviceEmpleados: ServiceEmpleados,
    private route: ActivatedRoute // Inyecta ActivatedRoute en el constructor
  ) {}

  ngOnInit(): void {
    // Recuperar el parámetro de la ruta
    this.route.params.subscribe((params) => {
      this.funcion = params['funcion'];
      console.log('Nuevo valor de funcionId:', this.funcion);
      // Llamar al servicio con el parámetro de la ruta
      this._serviceEmpleados.getEmpleadoFuncion(this.funcion).then((result) => {
        this.empleados = result; // Actualizar la lista de empleados con el resultado
      });
    });
  }
  onFuncionesSelected(funciones: string[]) {
    this.funcionesSeleccionadas = funciones;

    // Llamar al servicio con las funciones seleccionadas
    this._serviceEmpleados
      .getEmpleadosPorFunciones(this.funcionesSeleccionadas)
      .then((result) => {
        this.empleados = result;
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
