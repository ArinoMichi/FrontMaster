import React, { Component } from "react";

export default class Collatz extends Component {
  cajaNumero = React.createRef();
  state = {
    numeros: []
  };

  pintarlista = (e) => {
    e.preventDefault();

    this.setState({ numeros: [] }, () => { // Limpiar el array antes de calcular una nueva secuencia
      var numero = parseInt(this.cajaNumero.current.value);

      while (numero !== 1) {
        const nextNumber = numero % 2 === 0 ?
         numero / 2 : 3 * numero + 1;
        this.setState((prevState) => ({
          numeros: [...prevState.numeros, nextNumber]
        }));
        numero = nextNumber;
      }
    });
  };

  render() {
    return (
      <div>
        <h1 style={{color:"pink"}}>Collatz</h1>
        {
            this.state.numeros &&
            <ul>
                {this.state.numeros.map((numero, index) => (
                <li key={index}>{numero}</li>
          ))}
        </ul>
        }
        <form onSubmit={this.pintarlista}>
          <label>Introduce un numero ^^ :</label> <br/>
          <input type="text" ref={this.cajaNumero} />
          <br />
          <button>Comprobar teoria de Collatz</button>
        </form>
      </div>
    );
  }

}
