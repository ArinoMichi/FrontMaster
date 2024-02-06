import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cubo } from 'src/app/models/cubo';
import { ServiceTienda } from 'src/app/services/service.tienda';


@Component({
  selector: 'app-realizarcompra',
  templateUrl: './realizarcompra.component.html',
  styleUrls: ['./realizarcompra.component.css']
})
export class RealizarcompraComponent implements OnInit {
  public cubos!: Array<Cubo>;
  constructor(private service: ServiceTienda, private router: Router) {}

  ngOnInit(): void {
    this.getCubos();
  }

  getCubos(): void {
    this.service.getCubos().subscribe(result => {
      this.cubos = result;
    });
  }

  comprarCubo(idCubo: number): void {
    console.log(idCubo);
    this.service.realizarCompra(idCubo).subscribe((result)=>{
      console.log("Compra realizada")
      this.router.navigate(['/compras']);
    })
  }

}
