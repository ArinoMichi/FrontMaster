import React, { Component } from 'react';

export default class TablaMultiplicar extends Component {
  cajaNumero = React.createRef();
  state = {
    numero: 0,
    tabla: [],
  };

  pintarTabla = (e) => {
    e.preventDefault();
    const numero = parseInt(this.cajaNumero.current.value);
    const tabla = [];

    for (let i = 1; i <= 10; i++) {
      tabla.push({
        multiplicando: i,
        producto: numero * i,
      });
    }

    this.setState({ numero, tabla });
  };

  render() {
    const { numero, tabla } = this.state;

    return (
      <div>
        <h1 style={{ color: 'pink' }}>Tabla de Multiplicar</h1>

        <form onSubmit={this.pintarTabla}>
          <label>Introduce un número: </label>
          <input type="number" ref={this.cajaNumero} />
          <button>Mostrar tabla de Multiplicar</button>
        </form>
        <br/> 


        {
        tabla.length > 0 && (
          <table style={{ border: '1px solid black' }}>
            <thead>
              <tr>
                <th>Multiplicando</th>
                <th>Producto</th>
              </tr>
            </thead>
            <tbody>
              {tabla.map((numero, index) => (
                <tr key={index}>
                  <td>{`${numero} x ${numero.multiplicando}`}</td>
                  <td>{numero.producto}</td>
                </tr>
              ))}
            </tbody>
          </table>)
        }
      </div>
    );
  }
}
