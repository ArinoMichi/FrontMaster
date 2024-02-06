import React, { Component } from "react";
import Global from "../../Global";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default class Hospitales extends Component {
  urlHospitales = Global.urlApiHospitales;

  state = {
    hospitales: [],
    statusHospitales: false,
  };

  loadHospitales = () => {
    var request = "/webresources/hospitales";
    axios.get(this.urlHospitales + request).then((response) => {
      console.log("llego aqui");
      this.setState({
        hospitales: response.data,
        statusHospitales: true,
      });
      console.log(this.state.hospitales);
      console.log(this.state.statusHospitales);
    });
  };

  componentDidMount = () => {
    this.loadHospitales();
  };
  

  render() {
    return (
        <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Hospitales
        </a>
      <ul className="dropdown-menu">
        {this.state.statusHospitales == true &&
          this.state.hospitales.map((hospital, index) => {
            const linkTo = `/doctores/${hospital.idhospital}`;
            return (
              <li key={index} value={hospital.idhospital} className="nav-item">
                <NavLink className="dropdown-item" to={linkTo}>
                {hospital.nombre}
                </NavLink>
              </li>
            );
          })}
      </ul>
      </li>
    );
  }
}
