import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cubo } from 'src/app/models/cubo';
import { ServiceTienda } from 'src/app/services/service.tienda';

@Component({
  selector: 'app-cubosmarca',
  templateUrl: './cubosmarca.component.html',
  styleUrls: ['./cubosmarca.component.css']
})
export class CubosmarcaComponent implements OnInit {
  public cubos: Cubo[] = [];
  public marca: string = ''; // Add a property to store the marca

  constructor(
    private _serviceSerie: ServiceTienda,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Subscribe to route params to get the marca
    this.route.params.subscribe((params) => {
      this.marca = params['marca'];
      console.log('Marca:', this.marca);

      // Call the method to get cubos by marca
      this._serviceSerie.getCubosMarca(this.marca).subscribe((result)=>{
        this.cubos= result;
      })
      
    });
  }

}
