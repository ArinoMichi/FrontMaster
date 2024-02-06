import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

export default class HomeCoches extends Component {
  urlCoches = Global.apiCoches;
  state = {
    coches: [],
    statusGet: false,
  };

  loadCoches = () => {
    var request = "api/Coches";
    axios.get(this.urlCoches + request).then((response) => {
      this.setState({
        coches: response.data,
        statusGet: true,
      });
    });
  };

  componentDidMount = () => {
    this.loadCoches();
  };

  showAlert = (id) => {
    Swal.fire({
      title: "ELIMINAR EL COCHE " + id + " ??",
      text: "Esta accion no se puede deshacer!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "CANCELAR",
      confirmButtonText: "ELIMINAR",
    }).then((result) => {
      if (result.isConfirmed) {
        var request = "api/Coches/DeleteCoche/" + id;
        var url = Global.apiCoches + request;
        axios.delete(url).then((response) => {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
          this.loadCoches();
        });
      }
    });
  };

  render() {
    if (this.state.statusGet == true) {
      return (
        <div className="d-flex flex-column align-items-center justify-content-center text-center">
          <h1 className="mb-4 display-4 font-weight-bold">Home</h1>
          <table className="table table-bordered" style={{ width: "50%" }}>
            <thead>
              <tr className="table-dark">
                <th>ID</th>
                <th>MODELO</th>
                <th>IMAGEN</th>
                <th>BOTONES</th>
              </tr>
            </thead>
            <tbody>
              {this.state.coches.map((coche, index) => {
                return (
                  <tr>
                    <td>{coche.idCoche}</td>
                    <td>{coche.modelo}</td>
                    <td>
                      <img
                        src={coche.imagen}
                        style={{ width: "100px", height: "100px" }}
                      />
                    </td>
                    <td
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <NavLink
                        className="btn btn-info w-30" // Establecer ancho del 50% (w-50)
                        to={"/detalles/" + coche.idCoche}
                      >
                        DETALLES
                      </NavLink>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => this.showAlert(coche.idCoche)}
                      >
                        BORRAR
                      </button>
                      <NavLink
                        className="btn btn-success"
                        to={"/update/" + coche.idCoche}
                      >
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
      return <h1>Intentando cargar datos</h1>;
    }
  }
}
