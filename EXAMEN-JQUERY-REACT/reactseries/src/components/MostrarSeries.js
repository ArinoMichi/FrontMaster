import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default class MostrarSeries extends Component {
  urlApi = Global.urlSeries;
  state = {
    series: [],
    statusSerie: false,
  };

  cargarSeries = () => {
    var request = "api/Series";
    axios.get(this.urlApi + request).then((response) => {
        this.setState({
          series: response.data,
          statusSerie: true,
        });
      });
  };

  componentDidMount = () =>{
    this.cargarSeries();
  }

  render() {
    if (this.state.statusSerie) {
        return (
          <div>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              {this.state.series.map((serie, index) => (
                <li className="dropdown-item" key={serie.idSerie}>
                  <NavLink
                    to={"/serie/" + serie.idSerie}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {serie.nombre}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        );
      } else {
        return <p>Cargando series...</p>;
      }
  }
}
