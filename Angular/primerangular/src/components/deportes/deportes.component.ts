import {Component} from '@angular/core';

@Component ({
    selector: "app-deportes",
    templateUrl: "./deportes.component.html",
    styleUrls: ["./deportes.component.css"]
})

export class DeportesComponent {
    public sports: Array<string>;
    public numeros: Array<number>;

    constructor(){
        this.sports = ["Baile deportivo", "Natacion", "Patinaje Artistico"],
        this.numeros = this.cargarNumeros();
    }

    cargarNumeros(): Array<number> {
        var arrayaux = [];
        for (let i = 0; i < 10; i++) {
            var num = Math.floor(Math.random() * 10 + 1);
            arrayaux.push(num);

        }
        return arrayaux;
    }

}