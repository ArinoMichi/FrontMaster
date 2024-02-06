import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default class DeleteCoche extends Component {
  state = {
    status: false,
    
  };

  deleteCoche = () => {
    var request = "api/Coches/DeleteCoche/" + this.props.idcoche;
    var url = Global.apiCoches + request;
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
            ¿Eliminar Coche {this.props.idcoche}?
          </h4>
          <p>
            Una vez que elimines el coche, no podrás deshacer esta
            acción.
          </p>
          <hr />
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <NavLink to="/" className="btn btn-primary w-50">
              Cancelar
            </NavLink>
            <button
              className="btn btn-danger w-50"
              onClick={() => this.deleteCoche()}
            >
              Confirmar
            </button>
          </div>
        </div>
      </div>
    );
  }
}
