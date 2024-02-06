import React, { Component } from "react";
import axios, { Axios } from "axios";
import Global from "../../Global";

export default class ListaHospitales extends Component {
  urlHospitales = Global.urlApiHospitales;

  state = {
    hospitales: [],
    statusHospi: false,
  };

  loadHospitales = () => {
    var request = "/webresources/hospitales";
    axios.get(this.urlHospitales + request).then((response) => {
      this.setState({
        hospitales: response.data,
        statusHospi: true,
      });
    });
  };

  componentDidMount = () => {
    this.loadHospitales();
  };

  render() {
    return (
      <div className="d-flex flex-column align-items-center justify-content-center text-center">
        <h1 style={{ color: "blue" }}>Lista hospitales</h1>
        <table className="table table-bordered table-hover">
          <thead className="thead-dark">
            <tr className="table-info">
              <th>idhospital</th>
              <th>nombre</th>
              <th>direccion</th>
              <th>telefono</th>
              <th>camas</th>
            </tr>
          </thead>
          <tbody>
            {
                this.state.statusHospi==true && (
                    this.state.hospitales.map((hospital, index)=>{
                        return(<tr>
                            <td>{hospital.idhospital}</td>
                            <td>{hospital.nombre}</td>
                            <td>{hospital.direccion}</td>
                            <td>{hospital.telefono}</td>
                            <td>{hospital.camas}</td>
                        </tr>)
                    })
                )
            }
          </tbody>
        </table>
      </div>
    );
  }
}
