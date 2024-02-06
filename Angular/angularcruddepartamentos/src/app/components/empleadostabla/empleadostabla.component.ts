import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';
import { ServiceDepartamentos } from 'src/app/services/service.departamentos';

@Component({
  selector: 'app-empleadostabla',
  templateUrl: './empleadostabla.component.html',
  styleUrls: ['./empleadostabla.component.css'],
})
export class EmpleadostablaComponent {
  @ViewChild('cajauser') cajaUserRef!: ElementRef;
  @ViewChild('cajapassword') cajaPasswordRef!: ElementRef;

  public token!: string;
  public empleados: Empleado[] = []; // Assuming Empleado is the correct type for your data

  constructor(private _serviceDepartamentos: ServiceDepartamentos) {}

  logear(): void {
    var user = this.cajaUserRef.nativeElement.value;
    var pass = this.cajaPasswordRef.nativeElement.value;

    this._serviceDepartamentos.login(user, pass).subscribe((result) => {
      this.token = result.response;
      this.getEmpleados();
    });
  }

  getEmpleados(): void {
    this._serviceDepartamentos.getEmpleadosToken(this.token).subscribe((data) => {
      this.empleados = data; // Assuming the response is an array of Empleado objects
    });
  }
}
