import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";
import { NavLink } from "react-router-dom";

export default class DetallesCoche extends Component {
  urlCoches = Global.apiCoches;

  state = {
    coche: {},
    statusGet: false,
  };

  loadDetallesCoche = () => {
    var request = "api/Coches/FindCoche/" + parseInt(this.props.idcoche);
    console.log(request)
    axios.get(this.urlCoches + request).then((response) => {
      this.setState({
        coche: response.data,
        statusGet: true,
      });
      console.log(this.state.coche.marca)
    });
  };

  componentDidMount = () => {
    this.loadDetallesCoche();
  };

  render() {
    return (
      <div className="d-flex flex-column align-items-center justify-content-center text-center">
        <h1 className="mb-4 display-4 font-weight-bold">
          DETALLE COCHE {this.props.idcoche}
        </h1>
        <table
          className="table table-bordered"
          style={{ width: "50%" }}
        >
          <thead className="thead-dark">
            <tr className="table-info">
              <th>ID</th>
              <th>MARCA</th>
              <th>MODELO</th>
              <th>CONDUCTOR</th>
              <th>IMAGEN</th>
            </tr>
          </thead>
          <tbody>
            {this.state.statusGet == true && (
              <tr>
                <td>{this.state.coche.idcoche}</td>
                <td>{this.state.coche.marca}</td>
                <td>{this.state.coche.modelo}</td>
                <td>{this.state.coche.conductor}</td>
                <td>
                  <img
                    src={this.state.coche.imagen}
                    style={{ width: "100px", height: "100px" }}
                  />
                </td>
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
