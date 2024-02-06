import { Component, OnInit } from '@angular/core';
import { ServiceTienda } from 'src/app/services/service.tienda';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit{
  compras: any[]=[];

  constructor(private service: ServiceTienda){}

  ngOnInit(): void {
    this.service.getCompras().subscribe((result)=>{
      this.compras = result;
    })
  }
  formatearFecha(fecha: string): string {
    // Implementa la lógica de formato de fecha si es necesario
    return fecha;
  }
}
