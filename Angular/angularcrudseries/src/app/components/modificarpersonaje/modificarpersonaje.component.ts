import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Personaje } from 'src/app/models/personaje';
import { Serie } from 'src/app/models/serie';
import { ServiceSeries } from 'src/app/services/service.series';

@Component({
  selector: 'app-modificarpersonaje',
  templateUrl: './modificarpersonaje.component.html',
  styleUrls: ['./modificarpersonaje.component.css'],
})
export class ModificarpersonajeComponent implements OnInit {
  @ViewChild('cajaidserie') cajaIdSerieRef!: ElementRef;
  @ViewChild('cajaidpersonaje') cajaIdPersonajeRef!: ElementRef;

  public series!: Array<Serie>;
  public personajes!: Array<Personaje>;

  constructor(private _serviceSeries: ServiceSeries, private _router: Router) {}

  ngOnInit(): void {
    this._serviceSeries.getSeries().subscribe((result) => {
      this.series = result;
    });
    this._serviceSeries.getAllPersonajes().subscribe((result)=>{
      this.personajes = result;
    });
  }

  modificarPersonaje() {
    var idSerie = parseInt(this.cajaIdSerieRef.nativeElement.value);
    var idPersonaje = parseInt(this.cajaIdPersonajeRef.nativeElement.value);

    this._serviceSeries.modificarPersonaje(idPersonaje, idSerie).subscribe((result)=>{
      this._router.navigate([`/personajes/${idSerie}`]);
    })
  }
}
