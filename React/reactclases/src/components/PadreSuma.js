import { Component } from "react";
import HijoSuma from "./HijoSuma";
class PadreSuma extends Component{
    


    state = {
        suma: 0,
        numeros: [39,50,12]
    }
    sumarTotal = (numero) =>{
        this.setState({
            suma: this.state.suma +numero
        })
    }
    nuevoNumero = () =>{
        this.state.numeros.push(parseInt((Math.random() *100)+1));
        this.setState({
            numeros: this.state.numeros
        })
    }
    eliminarNumero = () =>{
        this.state.numeros.pop();
        this.setState({
            numeros: this.state.numeros
        })
    }


    render(){
        return(<div>
            <h1 style={{color:"green"}}>La suma es: {this.state.suma}</h1>
            <button onClick={this.nuevoNumero}>Nuevo número</button>
            <br/>
            <button onClick={this.eliminarNumero}>Borrar número</button>
            <hr/>
            {
                this.state.numeros.map((numero, index) =>{
                    return (
                        <HijoSuma num= {numero}  sumarTotal={this.sumarTotal}
                        />
                      );
                })
            }           
        </div>)
    }


}
export default PadreSuma;