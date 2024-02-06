import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Comic } from 'src/app/models/comic';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent {

  @Input() comic !: Comic;
  @Input() index !: number;
  @Output() seleccionarFavorito: EventEmitter<any> = new EventEmitter();
  @Output() eliminarComic: EventEmitter<any>= new EventEmitter();
  @Output() modificarComic: EventEmitter<any> = new EventEmitter();

  marcarFavorito(): void {
    this.seleccionarFavorito.emit(this.comic);
  }

  borrarComic(): void{
    this.eliminarComic.emit(this.index);
  }

  editarComic():void{
    this.modificarComic.emit(this.index);
  }

}
