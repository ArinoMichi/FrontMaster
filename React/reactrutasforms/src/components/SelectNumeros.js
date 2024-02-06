import React, { Component } from 'react'

export default class SelectNumeros extends Component {
    //NECESITAMOS UNA REFERENCIA PARA EL CONTROL SELECT
    selectNumero = React.createRef();


    mostrarTablaMultiplicar = (e) =>{
        e.preventDefault();
        var numero = parseInt(this.selectNumero.current.value);
        var aux = [];
        for (let i = 1; i < 10; i++) {
            var resultado = numero * i;
            var operacion = numero + " * " + i;
            aux.push(<tr key={i}>
                <td>{operacion}</td>
                <td>{resultado}</td>
            </tr>);
        }
        //POR ULTIMO, CAMBIAMOS EL STATE DE filas
        this.setState({
            filas:aux
        })

    }

    //VAMOS A CREAR UN METODO QUE NOS DEVOLVERA EL CODIGO HTML DIRECTAMENTE CON LOS OPTIONS
    crearSelect = () =>{
        var option = [];
        for (var i=1; i<=10;i++){
            var random = parseInt((Math.random()*10) +1);
            option.push(<option key={i} value={random}>{random}</option>)
        }
        return option;
    }

    //NECESITAMOS UN state CON LAS FILAS DE LA TABLA EN FORMATO HTML
    state = {
        filas: []
    }

  render() {
    return (
      <div>
        <h1>Tabla Multiplicar Component</h1>
        <form onSubmit={this.mostrarTablaMultiplicar}>
            <label>Introduce un numero</label>
            <select ref={this.selectNumero}>
                {this.crearSelect()}
            </select>
            <button>Tabla multiplicar</button>
        </form>
        <table border="1">
            <thead>
                <tr>Operacion</tr>
                <tr>Resultado</tr>
            </thead>
            <tbody>
                {this.state.filas}
            </tbody>
        </table>
      </div>
    )
  }
}
