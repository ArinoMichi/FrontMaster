import { Component,OnInit,ViewChild,ElementRef } from '@angular/core';
import { Personaje } from 'src/app/models/personaje';
import { ServiceSeries } from 'src/app/services/service.series';
import { Router } from '@angular/router';
import { Serie } from 'src/app/models/serie';

@Component({
  selector: 'app-insertarpersonaje',
  templateUrl: './insertarpersonaje.component.html',
  styleUrls: ['./insertarpersonaje.component.css']
})
export class InsertarpersonajeComponent  implements OnInit{
  @ViewChild("cajaid") cajaIdRef !: ElementRef;
  @ViewChild("cajanombre") cajaNombreRef !: ElementRef;
  @ViewChild("cajaimagen") cajaImagenRef !: ElementRef;
  @ViewChild("cajaidserie") cajaIdSerieRef !: ElementRef;

  public series !: Array<Serie>;
  
  constructor(
    private _serviceSeries: ServiceSeries,
    private _router: Router
  ){}

  ngOnInit(): void {
      this._serviceSeries.getSeries().subscribe((result)=>{
        this.series=result;
      })
  }

  insertarPersonaje(): void{
    var id = parseInt(this.cajaIdRef.nativeElement.value);
    var nom = this.cajaNombreRef.nativeElement.value;
    var img = this.cajaImagenRef.nativeElement.value;
    var idSerie = parseInt(this.cajaIdSerieRef.nativeElement.value);

    var nuevoPersonaje = new Personaje(id,nom,img,idSerie);

    console.log(nuevoPersonaje)
    this._serviceSeries.insert(nuevoPersonaje).subscribe((result)=>{
      this._router.navigate([`/personajes/${nuevoPersonaje.idSerie}`]);

    })

  }

}
