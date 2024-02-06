import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";

export default class CochesApi extends Component {
  urlCoches = Global.urlApiCoches;
  cajaMarca = React.createRef();

  state = {
    coches: [],
    status: false,
    cochesAll : []
  };

  buscarCocheMarca = (e) => {
    e.preventDefault();
    var marca = this.cajaMarca.current.value.toUpperCase();
    var coches = this.state.cochesAll;

      const cochesFiltrados = coches.filter((coches) => coches.marca == marca);
      this.setState({
        coches: cochesFiltrados,
      });
      console.log("filtrando por: " + marca);
  };

  loadCoches = (e) => {
    if(e !=null){
        e.preventDefault();
    }
    console.log("Cargando coches...");
    var request = "/webresources/coches";
    axios.get(this.urlCoches + request).then((response) => {
      this.setState({
        coches: response.data,
        cochesAll:response.data,
        status: true,
      });
    });
  };

  componentDidMount = () => {
    console.log("Creando component");
    this.loadCoches();
  };

  render() {
    return (
      <div>
        <h1>CochesApi</h1>
        <form onSubmit={this.buscarCocheMarca}>
          <label>Filtrar por marca:</label>
          <input type="text" ref={this.cajaMarca} /> <br />
          <button onClick={this.buscarCocheMarca}>Filtrar</button>
          <button onClick={this.loadCoches}>Resetear</button>
        </form>
        
        {
        this.state.status == true && (
          <table border="1" width="500px">
            <thead>
              <tr>
                <th>ID</th>
                <th>Marca</th>
                <th>Modelo</th>
                <th>Conductor</th>
                <th>Imagen</th>
              </tr>
            </thead>
            <tbody>
              {this.state.coches.map((coche, index) => (
                <tr key={coche.idcoche}>
                  <td>{coche.idcoche}</td>
                  <td>{coche.marca}</td>
                  <td>{coche.modelo}</td>
                  <td>{coche.conductor}</td>
                  <td>
                    <img
                      src={coche.imagen}
                      style={{ height: "100px", width: "100px" }}
                      alt={coche.marca}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )
        }
      </div>
    );
  }
}
