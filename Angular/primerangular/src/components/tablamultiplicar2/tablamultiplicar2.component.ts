import { Component, ViewChild, ElementRef } from "@angular/core";

@Component({
    selector: "app-tabla-multiplicar2",
    templateUrl: "./tablamultiplicar2.component.html"
})
export class TablaMultiplicar2Component {
    @ViewChild("cajaNumero") cajaNumeroRef!: ElementRef;

    public numeros: Array<number>;
    public numero !: number;

    constructor(){
        this.numeros= new Array<number>();

    }

    generarTablaMultiplicar(): void{
        this.numero = parseInt(this.cajaNumeroRef.nativeElement.value);
        var aux = new Array<number>();
        for( let i=1; i<=10; i++){
            let operacion = this.numero *i;
            aux.push(operacion);
        }
        this.numeros= aux;
    }
}