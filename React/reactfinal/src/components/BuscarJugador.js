import React, { Component } from "react";
import { Navigate } from "react-router-dom";

export default class BuscarJugador extends Component {
  cajaid = React.createRef();
  state = {
    pulsado: false,
    jugadorEncontrado: null,
  };

  buscarJugador = (e) => {
    e.preventDefault();
    const jugadorId = parseInt(this.cajaid.current.value);
    this.setState({
      jugadorEncontrado: jugadorId,
      pulsado: true,
    });
  };

  render() {
    return (
      <div>
        <form className="d-flex" onSubmit={this.buscarJugador}>
          <input
            className="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
            ref={this.cajaid}
          />
          <button
            className="btn btn-outline-success mr-2"
            type="submit"
          >
            Buscar
          </button>
        </form>
        {this.state.jugadorEncontrado && this.state.pulsado && (
          <Navigate to={"/jugadoresDetalle/" + this.state.jugadorEncontrado} />
        )}
      </div>
    );
  }
}
