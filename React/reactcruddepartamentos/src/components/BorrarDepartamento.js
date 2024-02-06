import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Global from "../Global";
import { Navigate } from "react-router-dom";

export default class BorrarDepartamento extends Component {
  state = {
    status: false,
  };

  deleteDepartamento = () => {
    var request = "api/departamentos/" + this.props.iddepartamento;
    var url = Global.apiDepartamentos + request;
    axios.delete(url).then((response) => {
      this.setState({
        status: true,
      });
    });
  };

  render() {
    return (
      <div className="d-flex flex-column align-items-center justify-content-center text-center">
        {this.state.status == true && <Navigate to="/" />}
        <div className="alert alert-danger" role="alert">
          <h4 className="alert-heading">
            ¿Eliminar Departamento {this.props.iddepartamento}?
          </h4>
          <p>
            Una vez que elimines el departamento, no podrás deshacer esta
            acción.
          </p>
          <hr />
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <NavLink to="/" className="btn btn-primary w-50">
              Cancelar
            </NavLink>
            <button
              className="btn btn-danger w-50"
              onClick={() => this.deleteDepartamento()}
            >
              Confirmar
            </button>
          </div>
        </div>
      </div>
    );
  }
}
