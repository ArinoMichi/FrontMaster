import { Component } from "react";
class HijoSuma extends Component{

    sumarNumeros =() =>{
        var numero = this.props.num;

        this.props.sumarTotal(numero);
    }



    render(){
        return(<div>
            {
                //CONDICIONES SIMPLES IF
                this.variable == 0 ? 
                (<h1>CONDION POSITIVA CERO</h1>):
                this.variable == 1 ?
                (<h1>CONDICION NEGATIVA 1</h1>):
                (<h1>CONDICION ELSE</h1>)

            }
            <h1 style={{color:"purple"}}>Numero hijo {this.props.num} </h1>
            <button onClick={() => {this.sumarNumeros()}}>Sumar {this.props.num}</button>
        </div>)
    }

}
export default HijoSuma;