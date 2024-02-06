import { Component } from '@angular/core';
import { ServiceTienda } from 'src/app/services/service.tienda';

@Component({
  selector: 'app-detallesuser',
  templateUrl: './detallesuser.component.html',
  styleUrls: ['./detallesuser.component.css'],
})
export class DetallesuserComponent {
  public usuario: any = null;

  constructor(private _serviceTienda: ServiceTienda) {}

  ngOnInit(): void {
    this.mostrarDatos();
  }

  mostrarDatos(): void {
    this._serviceTienda.getUsuario().subscribe(
      (result) => {
        this.usuario = result;
      },
      (error) => {
        console.error('Error al obtener perfil:', error);
        this.usuario = null; // Set usuario to null in case of an error
      }
    );
  }
}
