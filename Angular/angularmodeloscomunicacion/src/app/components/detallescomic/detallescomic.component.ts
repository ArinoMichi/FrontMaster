import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comic } from 'src/app/models/comic';

@Component({
  selector: 'app-detallescomic',
  templateUrl: './detallescomic.component.html',
  styleUrls: ['./detallescomic.component.css']
})
export class DetallescomicComponent implements OnInit{
  constructor(private route: ActivatedRoute) { }
  public comic!: Comic;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const comicString = params['comic'];
      this.comic = JSON.parse(comicString) as Comic;
      console.log('Comic:', this.comic);
    });

  }
}
