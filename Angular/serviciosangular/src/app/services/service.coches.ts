import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//NECESITAMOS DEVOLVER OBJETOS Observable
//DICHA LIBRERIA ESTA DENTRO DE rxjs
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ServiceCoches{
    constructor(private _http: HttpClient) {}

    getCoches():  Promise<any>{
        var request = "webresources/coches";
        var urlApiCoches = environment.urlApiCoches + request;
        let promise = new Promise((resolve)=>{
            this._http.get(urlApiCoches).subscribe((response)=>{
                resolve(response);
            })
        })
        return promise;
    }
}