import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Departamento } from '../models/departamento';
import { Empleado } from '../models/empleado';

@Injectable()
export class ServiceDepartamentos {
  constructor(private _http: HttpClient) {}
  getDepartamentos(): Observable<any> {
    var request = 'api/departamentos';
    var url = environment.urlApiDepartamentos + request;
    return this._http.get(url);
  }

  create(departamento: Departamento): Observable<any> {
    var json = JSON.stringify(departamento);

    var header = new HttpHeaders().set('Content-Type', 'application/json'); // Usa set para asignar la nueva instancia

    var request = 'api/departamentos';
    var url = environment.urlApiDepartamentos + request;

    console.log(url);

    return this._http.post(url, json, { headers: header });
  }

  update(departamento: Departamento): Observable<any> {
    var json = JSON.stringify(departamento);
    var header = new HttpHeaders().set('content-type', 'application/json');
    var request = 'api/departamentos';
    var url = environment.urlApiDepartamentos + request;
    return this._http.put(url, json, { headers: header });
  }
  delete(id: string): Observable<any> {
    var request = 'api/departamentos/' + id;
    var url = environment.urlApiDepartamentos + request;
    return this._http.delete(url);
  }


  login(user: string, pass: string): Observable<any> {
    var login = {
      userName: user,
      password: pass, // Fixing the typo here
    };

    var request = 'Auth/Login';
    var url = environment.urlApiEmpleadosToken + request;

    return this._http.post(url, login); // Using post instead of delete
  }

  getEmpleadosToken(token: string): Observable<any>{
    var header = new HttpHeaders().set('Authorization', 'bearer ' +token);
    var request = 'api/Empleados';
    var url= environment.urlApiEmpleadosToken + request;
    return this._http.get(url,{headers: header})
  }
}
