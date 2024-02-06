import { Component } from '@angular/core';
import { ServiceTienda } from 'src/app/services/service.tienda';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent {
  nombre: string = '';
  email: string = '';
  nuevaPassword: string = '';
  repetirPassword: string = '';
  registroCorrecto: boolean = false;
  registroIncorrecto: boolean = false;

  constructor(private service: ServiceTienda) {}
  registro(): void {
    // Verifica que las contraseñas coincidan antes de registrar
    if (this.nuevaPassword !== this.repetirPassword) {
      console.error('Las contraseñas no coinciden.');
      this.registroCorrecto = false;
      this.registroIncorrecto = true;
      return;
    }

    const json = {
      idUsuario: 0,
      nombre: this.nombre,
      email: this.email,
      pass: this.nuevaPassword
    };

    // Llama a la función de registro y maneja la promesa
    this.service.registrarse(json).subscribe(
      () => {
        console.log('Nombre:', this.nombre);
        console.log('Email:', this.email);
        console.log('Nueva Contraseña:', this.nuevaPassword);

        // Cambia el estado para mostrar el mensaje de éxito
        this.registroCorrecto = true;
        this.registroIncorrecto = false;
      },
      (error) => {
        console.error('Error en el registro:', error);

        // Cambia el estado para mostrar el mensaje de error
        this.registroCorrecto = false;
        this.registroIncorrecto = true;
      }
    );
  }
}
