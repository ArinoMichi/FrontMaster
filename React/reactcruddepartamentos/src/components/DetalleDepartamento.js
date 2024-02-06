import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default class DetalleDepartamento extends Component {
  urlDepartamentos = Global.apiDepartamentos;

  state = {
    departamento: [],
    status: false,
  };

  findDepartamento = () => {
    var request = "api/departamentos/" + this.props.iddepartamento;
    axios.get(this.urlDepartamentos + request).then((response) => {
      this.setState({
        departamento: response.data,
        status: true,
      });
    });
  };
  componentDidMount = () => {
    this.findDepartamento();
  };
  render() {
    return (
      <div className="d-flex flex-column align-items-center justify-content-center text-center">
        <h1 className="mb-4 display-4 font-weight-bold">Detalle Departamento {this.props.iddepartamento}</h1>
        <table
          className="table table-bordered table-hover"
          style={{ width: "50%" }}
        >
          <thead className="thead-dark">
            <tr className="table-info">
              <th>Numero</th>
              <th>Nombre</th>
              <th>Localidad</th>
            </tr>
          </thead>
          <tbody>
            {this.state.status == true && (
              <tr>
                <td>{this.state.departamento.numero}</td>
                <td>{this.state.departamento.nombre}</td>
                <td>{this.state.departamento.localidad}</td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="d-grid gap-2 col-3 mx-auto">
          <NavLink className="btn btn-primary" to={"/"}>
            Volver
          </NavLink>
        </div>
      </div>
    );
  }
}
