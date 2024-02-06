import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class ServiceTienda {
  constructor(private _http: HttpClient) {}

  getCubos(): Observable<any> {
    var request = 'api/Cubos';
    var url = environment.urlApiTienda + request;
    return this._http.get(url);
  }
  getCuboID(id: number): Observable<any> {
    var request = 'api/Cubos/' + id;
    var url = environment.urlApiTienda + request;
    return this._http.get(url);
  }
  getMarcas(): Observable<any> {
    var request = 'api/Cubos/Marcas';
    var url = environment.urlApiTienda + request;
    return this._http.get(url);
  }

  getComentarios(id: number): Observable<any> {
    var request = '/api/ComentariosCubo/GetComentariosCubo/' + id;
    var url = environment.urlApiTienda + request;
    return this._http.get(url);
  }
  getCubosMarca(marca: string): Observable<any> {
    var request = 'api/Cubos/CubosMarca/' + marca;
    var url = environment.urlApiTienda + request;
    return this._http.get(url);
  }

  login(user: string, pass: string): Observable<any> {
    var login = {
      email: user,
      password: pass,
    };
    var request = 'api/Manage/Login';
    var url = environment.urlApiTienda + request;
    return this._http.post(url, login); // Using post instead of delete
  }
    getUsuario(): Observable<any> {
        console.log(environment.token)
        var request = 'api/Manage/PerfilUsuario/';
        var url = environment.urlApiTienda + request;
        var header = new HttpHeaders().set(
        'Authorization',
        'bearer ' + environment.token
        );
        return this._http.get(url, { headers: header });
    }

    getCompras(): Observable<any>{
        var request = 'api/Compra/ComprasUsuario/';
        var url = environment.urlApiTienda + request;
        var header = new HttpHeaders().set(
        'Authorization',
        'bearer ' + environment.token
        );
        return this._http.get(url, { headers: header });
    }
    realizarCompra(id: number): Observable<any>{
        var request = 'api/Compra/InsertarPedido/' + id;
        var body = null
        var url = environment.urlApiTienda + request;
        var header = new HttpHeaders().set(
        'Authorization',
        'bearer ' + environment.token
        );
        return this._http.post(url, body,{ headers: header });
    }

    registrarse(json: Object): Observable<any>{
        var request = 'api/Manage/RegistroUsuario';
        var url = environment.urlApiTienda + request;
       
        return this._http.post(url, json);
    }
}
