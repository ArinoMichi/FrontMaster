import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default class DetallesJugador extends Component {
  urlApi = Global.urlapiApuestas;

  state = {
    jugador: {},
    statusJugador: false,
  };

  loadDetallesJugador = () => {
    var request = "api/Jugadores/" + parseInt(this.props.idJugador);
    console.log(this.urlApi+ request);
    axios.get(this.urlApi + request).then((response) => {
      this.setState({
        jugador: response.data,
        statusJugador: true,
      });
    });
  };

  componentDidMount = () => {
    this.loadDetallesJugador();
  };

  componentDidUpdate = (oldProps)=>{
    if (oldProps.idJugador != this.props.idJugador) {
        this.loadDetallesJugador();
    }
  }

  render() {
    return (
      <div className="d-flex justify-content-center ">
        {this.state.statusJugador && (
          <div className="card" style={{ width: "50%", textAlign: "center" }}>
            <h5 className="card-header">{this.state.jugador.nombre}</h5>
            <img
              style={{
                display: "block",
                margin: "0 auto",
                height: "200px",
                width: "200px",
              }}
              src={this.state.jugador.imagen}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{this.state.jugador.posicion}</h5>
              <p className="card-text">Fecha nacimiento: {this.state.jugador.fechaNacimiento}</p>
              <p className="card-text">Pais: {this.state.jugador.pais}</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}
