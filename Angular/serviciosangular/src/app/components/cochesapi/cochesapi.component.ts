import { Component , OnInit} from '@angular/core';
import { ServiceCoches } from 'src/app/services/service.coches';
import { Coche } from 'src/app/models/coche';

@Component({
  selector: 'app-cochesapi',
  templateUrl: './cochesapi.component.html',
  styleUrls: ['./cochesapi.component.css'],
})
export class CochesapiComponent implements OnInit {
  public coches!: Array<Coche>;

  constructor(private _serviceCoches: ServiceCoches) {}

  ngOnInit(): void {
    this._serviceCoches.getCoches().then((result)=>{
      this.coches=result;
    })
  }
}
