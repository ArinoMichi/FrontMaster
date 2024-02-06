 import Global from "@/components/Global";
 import axios from "axios";

export default class ServiceCoches{

    getMetodoParametros(param1){
        //DENTRO DEL METODO, DEBEMOS DEVOLVER LA PROMESA
        return new Promise(function(resolve){
            resolve("OK" + param1)
        })
    }

     getCoches(){ 
        return new Promise(function(resolve){
         var request = "webresources/coches";
         var url = Global.urlApiCoches + request;
         var coches=[];
         axios.get(url).then((response)=>{
             coches = response.data
             resolve (coches);
         })
     })}
}