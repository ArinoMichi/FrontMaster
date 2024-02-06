import {Injectable} from '@angular/core';
import { Empleado } from '../models/empleado';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class ServiceEmpleados{
    constructor(private _http: HttpClient) {}
    getFunciones() : Promise<any>{
        var request= "api/Plantilla/Funciones";
        var url= environment.urlApiEmpleados + request;
        let promise = new Promise((resolve)=>{
            this._http.get(url).subscribe((response)=>{
                resolve(response);
            })
        })
        return promise;
    }
    getEmpleadoFuncion(funcion: string): Promise<any> {
        var request = "api/Plantilla/PlantillaFuncion/" + funcion;
        var url = environment.urlApiEmpleados + request;
    
        let promise = new Promise((resolve) => {
          this._http.get(url).subscribe((response) => {
            resolve(response);
          });
        });
    
        return promise;
      }

      getEmpleadosPorFunciones(funciones: string[]): Promise<any> {
        var data = "";
        for(var funcion of funciones){
          data += "funcion=" + funcion + "&";
        }
        data = data.substring(0,data.length -1);
        var request = "api/Plantilla/PlantillaFunciones?" + data;
        var url = environment.urlApiEmpleados + request;

        let promise = new Promise((resolve) => {
          this._http.get(url).subscribe((response) => {
            resolve(response);
          });
        });
        return promise;
      }
}