import { Component } from "@angular/core";

@Component ({
    selector: "app-forms-binding",
    templateUrl: "./formsbinding.component.html"
})

export class FormsBindingComponent{
    //DECLARAMOS UN OBJETO PARA TRABAJAR CON 
    //EL FORMULARIO Y HACER UN BINDING
    public user: any;
    public mensaje: string;

    constructor(){
        this.mensaje= "";
        this.user= {
            nombre: "",
            apellidos: "",
            edad: 0
        }
    }

    //CREAMOS UN METODO PARA CUANDO PULSEMOS UN BOTON
    recibirDatos(): void{
        this.mensaje= "Datos recibidos"
    }

}