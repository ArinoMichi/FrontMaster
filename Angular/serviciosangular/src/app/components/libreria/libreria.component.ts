import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Comic } from 'src/app/models/comic';
import { ServiceComics } from 'src/app/services/service.comics';

@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrls: ['./libreria.component.css'],
  //DEBEMOS UTILIZAR providers DENTRO DEL COMPONENT
  //PARA PODER INYECTAR NUESTRO SERVICIO
  providers: [ServiceComics],
})
export class LibreriaComponent implements OnInit{
  public comics!: Array<Comic>;

  public comicFavorito!: Comic;

  @ViewChild('cajanombre') cajaNombreRef!: ElementRef;

  @ViewChild('cajadescripcion') cajaDescripcionRef!: ElementRef;

  @ViewChild('cajaimagen') cajaImagenRef!: ElementRef;


  //EN LOS CONSTRUCTORES NORMALMENTE SOLAMENTE SE UTILIZA LA 
  //INYECCION, NO LOS OBJETOS QUE RECIBE. LAS ACCIONES 
  //SE ESUELEN REALIZAR DENTRO DE ngOnInit
  constructor(private _service: ServiceComics) {}

  ngOnInit(): void {
    this.comics= this._service.getComics();
  }

  seleccionarFavorito(event: Comic): void {
    this.comicFavorito = event;
  }

  eliminarComic(event: number): void {
    this.comics.splice(event, 1);
  }
  insertarComic(): void {
    var titulo = this.cajaNombreRef.nativeElement.value;
    var descripcion = this.cajaDescripcionRef.nativeElement.value;
    var imagen = this.cajaImagenRef.nativeElement.value;

    var nuevoComic = new Comic(titulo, descripcion, imagen);
    this.comics.push(nuevoComic);
  }

  modificarComic(event: number): void {
    var titulo = this.cajaNombreRef.nativeElement.value;
    var descripcion = this.cajaDescripcionRef.nativeElement.value;
    var imagen = this.cajaImagenRef.nativeElement.value;

    this.comics[event] = new Comic(titulo, descripcion, imagen);
  }
}
