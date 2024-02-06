import React, { Component } from 'react'

export default class TablaMultiplicarv2 extends Component {
    //NECESITAMOS UNA REFERENCIA PARA EL INPUT DE LA CAJA
    cajaNumero = React.createRef();

    mostrarTablaMultiplicar = (e) =>{
        e.preventDefault();
        var numero = parseInt(this.cajaNumero.current.value);
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
            <input type='number' ref={this.cajaNumero}/>
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
