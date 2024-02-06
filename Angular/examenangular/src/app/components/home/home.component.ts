import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { Cubo } from 'src/app/models/cubo';
import { ServiceTienda } from 'src/app/services/service.tienda'; // Ensure correct import path

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public cubos: Cubo[] = [];

  constructor(
    private _serviceSerie: ServiceTienda,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Call the method and subscribe to the returned observable
    this._serviceSerie.getCubos().subscribe(
      (result) => {
        this.cubos = result;
      },
      (error) => {
        console.error('Error fetching cubos:', error);
      }
    );
  }
}
