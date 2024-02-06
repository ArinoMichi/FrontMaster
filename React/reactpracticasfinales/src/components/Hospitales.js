import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";
import Trabajadores from "./Trabajadores";

// Importa los estilos de Bootstrap (puedes usar un CDN o una instalación de npm)
import "bootstrap/dist/css/bootstrap.min.css";

export default class Hospitales extends Component {
  urlApi = Global.apiHospitalesTrabajadores;

  state = {
    hospitales: [],
    selectedOptions: [],
    statusHospitales: false,
    mostrarTrabajadores: false,
  };

  handleSelectChange = (event) => {
    const selectedOptions = Array.from(event.target.options)
      .filter((option) => option.selected)
      .map((option) => option.value);

    this.setState({
      selectedOptions,
      mostrarTrabajadores: true,
    });
  };

  loadHospitales = () => {
    var request = "api/Hospitales";
    axios.get(this.urlApi + request).then((response) => {
      this.setState({
        hospitales: response.data,
        statusHospitales: true,
      });
    });
  };

  componentDidMount = () => {
    this.loadHospitales();
  };

  render() {
    const selectSize = this.state.hospitales.length;
    return (
      <div className="container mt-4">
        <h1>Selecciona Hospitales</h1>
        <select
          multiple
          className="form-select"
          size={selectSize}
          onChange={this.handleSelectChange}
        >
          {this.state.statusHospitales && (
            this.state.hospitales.map((hospital, index) => (
              <option key={hospital.idHospital} value={hospital.idHospital}>
                {hospital.nombre}
              </option>
            ))
          )}
        </select>
        {this.state.mostrarTrabajadores && (
          <Trabajadores idHospital={this.state.selectedOptions} />
        )}
      </div>
    );
  }
}
