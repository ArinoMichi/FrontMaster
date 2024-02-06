import axios from "axios"
import Global from "@/Global"

export default class ServiceCoches{
    async getCoches() {
        const request = "api/Coches";
        const url = Global.urlApiCoches + request;
        // eslint-disable-next-line no-useless-catch
        try {
            const response = await fetch(url);
            const coches = await response.json();
            return coches;
        } catch (error) {
            throw error;
        }
    }
    getCocheId (id){
        return new Promise(function(resolve){
            var request = "api/Coches/FindCoche/" + id;
            var url = Global.urlApiCoches + request;
            var coche= {};
            axios.get(url).then((response)=>{
                coche=response.data;
                resolve(coche);
            })
        })
    }
    insertCoche(coche){
        return new Promise(function(resolve){
            var request = "api/Coches/InsertCoche";
            var url = Global.urlApiCoches + request;
            axios.post(url,coche).then((response)=>{
                resolve(response)
            })
        })
    }
    updateCoche(coche){
        return new Promise(function(resolve){
            var request = "api/Coches/UpdateCoche";
            var url = Global.urlApiCoches + request;
            axios.put(url,coche).then((response)=>{
                resolve(response)
            })
        })
    }

    deleteCoche(id){
        return new Promise(function(resolve){
            var request = "api/Coches/DeleteCoche/" + id;
            var url = Global.urlApiCoches + request;
            axios.delete(url).then((response)=>{
                resolve(response);
            })
        })
    }
}