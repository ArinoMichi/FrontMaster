import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceTienda } from 'src/app/services/service.tienda';
import { Cubo } from 'src/app/models/cubo';
import { Comentario } from 'src/app/models/comentario';

@Component({
  selector: 'app-detallescubo',
  templateUrl: './detallescubo.component.html',
  styleUrls: ['./detallescubo.component.css'],
})
export class DetallescuboComponent implements OnInit {
  public idCubo!: number;
  public cubo !: Cubo;
  public comentarios: Comentario[] = [];

  constructor(
    private route: ActivatedRoute,
    private _serviceTienda: ServiceTienda
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idCubo = params['id'];
      console.log('Nuevo valor de cubo:', this.idCubo);
      // Llamar al servicio con el parámetro de la ruta
      this._serviceTienda.getCuboID(this.idCubo).subscribe((result)=>{
        this.cubo=result;
      })
    });
    this._serviceTienda.getComentarios(this.idCubo).subscribe((result)=>{
      this.comentarios=result;
    })
  }
}
