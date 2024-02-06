import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Personaje } from '../models/personaje';

@Injectable()
export class ServiceSeries {
  constructor(private _http: HttpClient) {}

  getSeries(): Observable<any> {
    var request = 'api/Series';
    var url = environment.urlApiSeries + request;
    return this._http.get(url);
  }
  getSerieID(idSerie: number): Observable<any> {
    var request = 'api/Series/' + idSerie;
    var url = environment.urlApiSeries + request;
    return this._http.get(url);
  }

  getPersonajes(idSerie: number): Observable<any> {
    var request = 'api/Series/PersonajesSerie/' + idSerie;
    var url = environment.urlApiSeries + request;
    return this._http.get(url);
  }

  getAllPersonajes(): Observable<any> {
    var request = 'api/Personajes';
    var url = environment.urlApiSeries + request;
    return this._http.get(url);
  }

  modificarPersonaje(idPersonaje: number, idSerie: number): Observable<any> {
    var request = 'api/Personajes/' + idPersonaje + '/' + idSerie;
    var header = new HttpHeaders().set('content-type', 'application/json');
    var url = environment.urlApiSeries + request;
    return this._http.put(url, { headers: header });
  }

  insert(personaje: Personaje): Observable<any> {
    var json = JSON.stringify(personaje);

    var header = new HttpHeaders().set('Content-Type', 'application/json'); // Usa set para asignar la nueva instancia

    var request = 'api/Personajes';
    var url = environment.urlApiSeries + request;

    console.log(url);

    return this._http.post(url, json, { headers: header });
  }
}
