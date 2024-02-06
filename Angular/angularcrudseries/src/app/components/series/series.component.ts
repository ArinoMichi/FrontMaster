import { Component, OnInit} from '@angular/core';
import { Serie } from 'src/app/models/serie';
import { ServiceSeries } from 'src/app/services/service.series';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent {
  public series !: Array<Serie>;
  constructor(private _serviceSeries: ServiceSeries) {}
  ngOnInit(): void {
    this._serviceSeries.getSeries().subscribe((result)=>{
      this.series=result;
    })
  }
}
