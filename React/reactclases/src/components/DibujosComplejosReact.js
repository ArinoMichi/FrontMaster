import { Component } from "react";

class DibujosComplejosReact extends Component {
  //DECLARAMOS UN ARRAY DE NOMBRES
  state = {
    nombres: ["Lucia", "Adrian", "Carlos", "Diana", "Antonia"],
  };

  //METODO PARA GENERAR NUEVO NOMBRE
  generarNombre = () => {
    this.state.nombres.push("Nuevo Nombre");
    this.setState({
        nombres: this.state.nombres
    })
  };

  borrarNombre = () => {
    this.state.nombres.pop();
    this.setState({
        nombres: this.state.nombres
    })
  };

  render() {
    return (
      <div>
        <h1>Dibujos Complejos React</h1>
        <button onClick={() => this.generarNombre()}>Generar Nombre</button>
        <button onClick={() => this.borrarNombre()}>Borrar Nombre</button>
        {
          //ESTE CODIGO REACT DEBE TENER UN RETURN
          //Y ES CODIGO LOGICO QUE UTILIZA LA SINTAXIS JSX
          this.state.nombres.map((name, index) => {
            //NUNCA PODEMOS DEJAR VACIO ESTE CODIGO,
            //DEBE CONTENER UN RETURN
            return (
              <h3 key={index} style={{ color: "pink" }}>
                {name}
              </h3>
            );
          })
        }
      </div>
    );
  }
}
export default DibujosComplejosReact;
