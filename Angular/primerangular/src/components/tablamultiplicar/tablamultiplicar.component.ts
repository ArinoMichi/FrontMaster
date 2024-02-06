import { Component, ViewChild, ElementRef } from "@angular/core";

@Component({
    selector: "app-tabla-multiplicar",
    templateUrl: "./tablamultiplicar.component.html"
})

export class TablaMultiplicar {
    @ViewChild("cajanumero") cajaNumeroRef: ElementRef;

    public arrayMultiplicacion:number[];

    constructor() {
        this.cajaNumeroRef = new ElementRef(0);
        this.arrayMultiplicacion = [];
    }
    sacarTabla(): void {
        this.arrayMultiplicacion = [];
        const numero = +this.cajaNumeroRef.nativeElement.value;
        for (let i = 1; i <= 10; i++) {
            this.arrayMultiplicacion.push(numero * i);
        }
    }
}