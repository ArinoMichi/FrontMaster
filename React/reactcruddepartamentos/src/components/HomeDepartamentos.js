import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";
import loadImage from "../assets/images/loading.gif";
import { NavLink, Navigate } from "react-router-dom";
import { Modal } from "bootstrap";

export default class HomeDepartamentos extends Component {
  urlDepartamentos = Global.apiDepartamentos;

  state = {
    departamentos: [],
    status: false,
  };

  loadDepartamentos = () => {
    var request = "api/Departamentos";
    axios.get(this.urlDepartamentos + request).then((response) => {
      this.setState({
        departamentos: response.data,
        status: true,
      });
    });
  };

  componentDidMount = () => {
    this.loadDepartamentos();
  };



  render() {
    if (this.state.status === true) {
      return (
        <div className="d-flex flex-column align-items-center justify-content-center text-center">
          <h1 className="mb-4 display-4 font-weight-bold">
            Home Departamentos
          </h1>
          <table
            className="table table-bordered table-hover"
            style={{ width: "50%" }}
          >
            <thead className="thead-dark">
              <tr className="table-info">
                <th>Nombre</th>
                <th>Localidad</th>
                <th>Botones</th>
              </tr>
            </thead>
            <tbody>
              {this.state.status === true &&
                this.state.departamentos.map((departamento, index) => {
                  return (
                    <tr key={index}>
                      <td>{departamento.nombre}</td>
                      <td>{departamento.localidad}</td>
                      <td
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <NavLink
                          className="btn btn-info w-30" // Establecer ancho del 50% (w-50)
                          to={"/deatelledept/" + departamento.numero}
                        >
                          DETALLES
                        </NavLink>
                        <NavLink
                          className="btn btn-danger"
                          to={"/delete/" + departamento.numero}
                        >
                          BORRAR
                        </NavLink>
                        <NavLink className="btn btn-success" to={"/update/" + departamento.numero}>
                        MODIFICAR
                        </NavLink>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <img src={loadImage} className="rounded mx-auto d-block" />;
    }
  }
}
