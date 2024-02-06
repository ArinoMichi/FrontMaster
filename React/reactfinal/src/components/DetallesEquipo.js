import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default class DetallesEquipo extends Component {
  urlApi = Global.urlapiApuestas;

  state = {
    equipo: {},
    statusEquipo: false,
  };

  loadDetalles = () => {
    var request = "api/Equipos/" + parseInt(this.props.idEquipo);
    axios.get(this.urlApi + request).then((response) => {
      this.setState({
        equipo: response.data,
        statusEquipo: true,
      });
    });
  };

  componentDidMount = () => {
    this.loadDetalles();
  };
  componentDidUpdate=(oldProps)=>{
    if (oldProps.idEquipo!=this.props.idEquipo) {
        this.loadDetalles();
    }
  }

  render() {
    return (
      <div className="d-flex justify-content-center ">
        {this.state.statusEquipo && (
          <div className="card" style={{ width: "50%", textAlign:"center" }}>
            <h5 className="card-header">{this.state.equipo.nombre}</h5>
            <img
             style={{ display: "block", margin: "0 auto", height:"200px",width:"200px" }}
             src={this.state.equipo.imagen}
             className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{this.state.equipo.nombre}</h5>
              <p className="card-text">{this.state.equipo.descripcion}</p>
              <NavLink to={"/jugadores/" + this.state.equipo.idEquipo} className="btn btn-success">
                JUGADORES
              </NavLink>
              <NavLink to="/" className="btn btn-primary">
                VOLVER
              </NavLink>
            </div>
          </div>
        )}
      </div>
    );
  }
}
