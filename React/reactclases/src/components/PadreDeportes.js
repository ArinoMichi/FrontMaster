import { Component } from "react";
import HijoDeportes from "./HijoDeportes";
class PadreDeportes extends Component{
    deportes = ["Petanca", "Futbol", "DanceSport", "Natacion"]
    //NECESITAMOS UNA VARIABLE PARA SABER EL DEPORTE
    //FAVORITO, DICHA VARIABLE SERA DINAMICA DEPENDIENDO DEL HIJO 
    //SELECCIONADO
    state = {
        favorito : ""
    }

    //NECESITAMOS UN METODO QUE RECIBIRA EL DEPORTE SELECCIONADO
    //DESDE EL HIJO
    mostrarFavorito = (deporteSeleccionado) =>{
        this.setState({
            favorito: deporteSeleccionado
        })
    }
    render(){
        return(<div>
            <h1>Padre deportes</h1>
            <h2 style={{color: "purple", backgroundColor: "grey"}}>
            Su deporte favorito es.... {this.state.favorito}
            </h2>
            {
                //RECORREMOS TODOS LOS DEPORTES Y CREAMOS
                //ETIQUETAS <HijoDeportes> ENVIANDO EL NOMBRE
                this.deportes.map((deporte,index) =>{
                   return <HijoDeportes nombre={deporte} mostrarFavorito={this.mostrarFavorito}/>
                })
            }
        </div>)
    }
}
export default PadreDeportes;