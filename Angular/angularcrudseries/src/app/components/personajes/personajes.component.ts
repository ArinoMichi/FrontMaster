import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Personaje } from 'src/app/models/personaje';
import { ServiceSeries } from 'src/app/services/service.series';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css'],
})
export class PersonajesComponent implements OnInit {
  public personajes!: Array<Personaje>;
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
      this._serviceSerie.getPersonajes(this.idSerie).subscribe((result)=>{
        this.personajes=result;
      })
    });
  }
}
