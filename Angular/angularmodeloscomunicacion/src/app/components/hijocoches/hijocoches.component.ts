import { Component, Input } from '@angular/core';
import { Coche } from 'src/app/models/coche';

@Component({
  selector: 'app-hijocoches',
  templateUrl: './hijocoches.component.html',
  styleUrls: ['./hijocoches.component.css']
})
export class HijocochesComponent {
  @Input() car!: Coche;
  public mensaje!: string;

  constructor() {
    //CUANDO RECIBIMOS ELEMENTOS INPUT, NO PODEMOS UTILIZARLOS DENTRO DEL CONSTRUCTOR
  }

  //TENDREMOS UN METODO QUE DEVOLVERA TRUE O FALSE
  //SI EL COCHE ESTA APAGADO O ENCENDIDO
  comprobarEstado(): boolean {
    if (this.car.estado == false) {
      this.mensaje="El coche esta apagado";
      this.car.velocidad= 0;
      return false;
    }else{
      this.mensaje= "El coche esta encendido";
      return true;
    }
  }

  //TENDREMOS UN METODO PARA ENCENDER EL COCHE

    encenderCoche(): void{
      this.car.estado= !this.car.estado;
      this.comprobarEstado();
    }


  //TENDREMOS UN METODO PARA APAGAR EL COCHE


    acelerarCoche() : void{
      if(this.comprobarEstado() == false){
        alert("¿Donde vas?, El coche esta apagado!!");
      }else{
        this.car.velocidad = this.car.velocidad + this.car.aceleracion;
      }
    }

}
