import axios from "axios";
import Global from "@/Global";

export default class ServiceSeries{
    getSeries(){
        return new Promise(function(resolve){
            var request = "api/Series";
            var url = Global.urlApiSeries + request;
            var series = [];
            axios.get(url).then((response)=>{
                series= response.data;
                resolve(series)
            })
        })
    }
    getPersonajes(){
        return new Promise(function(resolve){
            var request = "api/Personajes";
            var url = Global.urlApiSeries + request;
            var personajes= [];
            axios.get(url).then((response)=>{
                personajes=response.data;
                resolve(personajes)
            })
        })
    }
    getSerieId(id){
        return new Promise(function(resolve){
            var request = "api/Series/" + id;
            var url = Global.urlApiSeries + request;
            var serie={};
            axios.get(url).then((response)=>{
                serie = response.data;
                resolve(serie)
            })
        })
    }
    getPersonajesSerie(id){
        return new Promise(function(resolve){
            var request= "api/Series/PersonajesSerie/" + id;
            var url = Global.urlApiSeries + request;
            var personajes= [];
            axios.get(url).then((response)=>{
                personajes = response.data;
                resolve(personajes);
            })
        })
    }
    insertPersonaje(personaje){
        return new Promise(function(resolve){
            var request = "/api/Personajes";
            var url = Global.urlApiSeries + request;
            axios.post(url, personaje).then((response)=>{
                resolve(response);
            })
        })
    }
    putPersonajeSerie(idPersonaje, idSerie){
        return new Promise(function(resolve){
            var request = "/api/Personajes/" + idPersonaje + "/" + idSerie;
            var url = Global.urlApiSeries + request;
            axios.put(url).then((response)=>{
                resolve(response);
            })
        })
    }
}