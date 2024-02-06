import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comentario } from 'src/app/models/comentario';

import { ServiceTienda } from 'src/app/services/service.tienda';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit{
  public comentarios !: Array<Comentario>;
  public idCubo!: number;

  constructor(
    private route: ActivatedRoute,
    private service: ServiceTienda
  ){}
  ngOnInit(): void {
    this.idCubo= this.route.snapshot.params['id'];
    this.service.getComentarios(this.idCubo).subscribe((result)=>{
      this.comentarios= result;
    })
  }
}
