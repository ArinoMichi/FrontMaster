import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default class MostrarEquipos extends Component {
  urlApi = Global.urlapiApuestas;

  state = {
    equipos: [],
    statusEquipos: false,
  };

  cargarEquipos = () => {
    var request = "api/Equipos";
    axios.get(this.urlApi + request).then((response) => {
      this.setState({
        equipos: response.data,
        statusEquipos: true,
      });
    });
  };

  componentDidMount = () => {
    this.cargarEquipos();
  };

  render() {
    if (this.state.statusEquipos) {
      return (
        <div>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            {this.state.equipos.map((equipo, index) => (
              <li className="dropdown-item" key={equipo.idEquipo}>
                <NavLink
                  to={"/detalles/" + equipo.idEquipo}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {equipo.nombre}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      );
    } else {
      // Puedes manejar el caso en el que statusEquipos es falso aquí
      return <p>Cargando equipos...</p>;
    }
  }
}
