import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Comic } from 'src/app/models/comic';
import { Router } from '@angular/router';


@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent {
  @Input() comic !: Comic;

  @Output() seleccionarFavorito: EventEmitter<any> = 
  new EventEmitter();

  @Output() eliminar: EventEmitter<any> = 
  new EventEmitter();

  constructor(private router: Router){}

  seleccionarFavoritoHijo(): void{
    //ESTE METODO LLAMARA AL PADRE
    this.seleccionarFavorito.emit(this.comic);
  }
  eliminarComic(): void{
    this.eliminar.emit(this.comic);
  }
  navigateToDetalles(comic: Comic): void {
    const comicString = JSON.stringify(comic);
    this.router.navigate(['/detalles', comicString]);
  }

}
