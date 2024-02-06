import { Component } from "react";

class HijoDeportes extends Component{

    seleccionarFavorito= () =>{
        //QUE NECESITAMOS??
        //EJECUTAR EL METODO DEL PARENT!!
        //CAPTURAMOS PROPS PARA INDICAR EL DEPORTE SELECCIONADO
        var deporte = this.props.nombre;
        //REALIZAMOS LA LLAMADA AL PADRE ENVIANDO EL DEPORTE
        this.props.mostrarFavorito(deporte);
    }


    render(){
        return(<div>
            <h1 style={{color:"pink"}}>{this.props.nombre}</h1>
            <button onClick={() => this.seleccionarFavorito()}>seleccionarFavorito</button>
        </div>)
    }
}
export default HijoDeportes;