import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default class Apuestas extends Component {
  urlApi = Global.urlapiApuestas;

  state = {
    apuestas: [],
    statusApuestas: false,
  };

  loadApuestas = () => {
    var request = "api/Apuestas";
    axios.get(this.urlApi + request).then((response) => {
      this.setState({
        apuestas: response.data,
        statusApuestas: true,
      });
    });
  };
  componentDidMount = () => {
    this.loadApuestas();
  };

  render() {
    if (this.state.statusApuestas == true) {
      return (
        <div className="d-flex flex-column align-items-center justify-content-center text-center">
          <table
            className="table table-success table-striped-columns"
            style={{ width: "50%" }}
          >
            <thead className="table table-dark ">
              <tr>
                <th>USUARIO</th>
                <th>RESULTADO</th>
                <th>FECHA</th>
              </tr>
            </thead>
            <tbody>
              {this.state.apuestas.map((apuesta, index) => {
                return (
                  <tr>
                    <td>{apuesta.usuario}</td>
                    <td>{apuesta.resultado}</td>
                    <td>{apuesta.fecha}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <NavLink className="btn btn-info" to="/insert">CREAR APUESTA</NavLink>
        </div>
      );
    }
  }
}
