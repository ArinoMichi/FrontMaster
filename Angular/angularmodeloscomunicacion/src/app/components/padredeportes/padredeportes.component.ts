import { Component } from '@angular/core';

@Component({
  selector: 'app-padredeportes',
  templateUrl: './padredeportes.component.html',
  styleUrls: ['./padredeportes.component.css']
})
export class PadredeportesComponent {
  public deportes: Array<string>;

  public mensaje!: string;

  constructor(){
    this.deportes= [
      "DanceSport", "Volleyball", "Natacion"
    ]
  }

  //TENDREMOS UN METODO PARA RECIBIR DATOS DESDE EL HIJO
  seleccionarFavoritoPadre(event: any) :void{
    console.log(event);
    this.mensaje="Tu deporte fav es: " + event
  }
}
