import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Serie } from 'src/app/models/serie';
import { ServiceSeries } from 'src/app/services/service.series';

@Component({
  selector: 'app-detallesserie',
  templateUrl: './detallesserie.component.html',
  styleUrls: ['./detallesserie.component.css'],
})
export class DetallesserieComponent implements OnInit {
  public serie!: Serie;
  public idSerie!: number;

  constructor(
    private _serviceSerie: ServiceSeries,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idSerie = params['id'];
      console.log('Nuevo valor de serieID:', this.idSerie);
      // Llamar al servicio con el parámetro de la ruta
      this._serviceSerie.getSerieID(this.idSerie).subscribe((result) => {
        this.serie = result;
      });
    });
  }
}
