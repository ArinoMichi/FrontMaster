import { Component, ViewChild, ElementRef } from '@angular/core';
import { Comic } from 'src/app/models/comic';

@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrls: ['./libreria.component.css']
})
export class LibreriaComponent {
  public comics: Comic[];
  public seleccionado!: Comic;
  @ViewChild("cajaTitulo") cajaTitulo: ElementRef;
  @ViewChild("cajaImagen") cajaImagen: ElementRef;
  @ViewChild("cajaDescripcion") cajaDescripcion: ElementRef;


  constructor() {
    this.cajaTitulo = new ElementRef(0);
    this.cajaDescripcion = new ElementRef(0);
    this.cajaImagen = new ElementRef(0);
    this.comics = [
      new Comic(
        "Spiderman",
        "https://m.media-amazon.com/images/I/81jOBK72ILL._AC_UF1000,1000_QL80_.jpg",
        "Hombre araña"
      ),
      new Comic(
        "Wolverine",
        "https://images-na.ssl-images-amazon.com/images/I/51c1Q1IdUBL._SX259_BO1,204,203,200_.jpg",
        "Lobezno"
      ),
      new Comic(
        "Guardianes de la Galaxia",
        "https://cdn.normacomics.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/g/u/guardianes_galaxia_guadianes_infinito.jpg",
        "Yo soy Groot"
      ),
      new Comic(
        "Avengers",
        "https://d26lpennugtm8s.cloudfront.net/stores/057/977/products/ma_avengers_01_01-891178138c020318f315132687055371-640-0.jpg",
        "Los Vengadores"
      ),
      new Comic(
        "Spawn",
        "https://i.pinimg.com/originals/e1/d8/ff/e1d8ff4aeab5e567798635008fe98ee1.png",
        "Al Simmons"
      ),
      new Comic(
        "Batman",
        "https://www.comicverso.com/wp-content/uploads/2020/06/The-Killing-Joke-657x1024.jpg",
        "Murciélago"
      )
    ];
  }
  seleccionarFavorito(event: any): void {
    console.log(event);
    this.seleccionado = event;
  }

  eliminarComic(event: any): void {
    const index = this.comics.indexOf(event);
    if (index !== -1) {
      this.comics.splice(index, 1);
      console.log('Comic eliminado:', event);
    }

  }

  insertarComic(): void {
    const titulo = this.cajaTitulo.nativeElement.value;
    const imagen = this.cajaImagen.nativeElement.value;
    const descripcion = this.cajaDescripcion.nativeElement.value

    const comicNuevo = new Comic(titulo, imagen, descripcion)
    console.log(comicNuevo)
    this.comics.push(comicNuevo);
  }
}
