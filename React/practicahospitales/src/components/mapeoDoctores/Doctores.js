import React, { Component } from "react";
import Global from "../../Global";
import axios from "axios";
import DetallesDoctor from "./DetallesDoctor";
import { NavLink } from "react-router-dom";

export default class Doctores extends Component {
  urlDoctores = Global.urlApiDoctores;

  state = {
    doctores: [],
    statusDoctores: false,
    doctorSeleccionado: -1,
    doctorname: "",
  };

  loadDoctores = () => {
    var idHospital = this.props.idHospital;
    var request = "/api/Doctores/DoctoresHospital/" + idHospital;

    axios.get(this.urlDoctores + request).then((response) => {
      console.log("llego aqui");
      this.setState({
        doctores: response.data,
        statusDoctores: true,
      });
    });
  };
  componentDidMount = () => {
    this.loadDoctores();
  };
  componentDidUpdate = (prevProps) => {
    if (this.props.idHospital !== prevProps.idHospital) {
      this.loadDoctores();
    }
  };

  mostrarDetalles = (iddoctor, apellido) => {
    // Cuando se hace clic en el botón de "DETALLES", se actualiza el estado con el doctor seleccionado.
    this.setState({
      doctorSeleccionado: iddoctor,
      doctorname: apellido,
    });
  };

  render() {
    return (
      <div className="d-flex flex-column align-items-center justify-content-center text-center">
        <h1 style={{ color: "brown" }}>
          Doctores en el hospital {this.props.idHospital}
        </h1>
        <table className="table table-bordered table-hover">
          <thead className="thead-dark">
            <tr className="table-info">
              <th>ID DOCTOR</th>
              <th>APELLIDO</th>
              <th>BOTONES</th>
              <th>ENLACE</th>
            </tr>
          </thead>
          <tbody>
            {this.state.statusDoctores === true &&
              this.state.doctores.map((doctor, index) => {
                return (
                  <tr key={index}>
                    <td>{doctor.idDoctor}</td>
                    <td>{doctor.apellido}</td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() =>
                          this.mostrarDetalles(doctor.idDoctor, doctor.apellido)
                        }
                      >
                        DETALLES
                      </button>
                    </td>
                    <td>
                      <NavLink to={"/detallesdoctor/" + doctor.idDoctor + "/" + doctor.apellido}>
                        Mostrar detalles
                      </NavLink>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        {this.state.doctorSeleccionado != -1 && (
          <DetallesDoctor
            iddoctor={this.state.doctorSeleccionado}
            nombre={this.state.doctorname}
          />
        )}

        {/* Mostrar detalles del doctor seleccionado debajo de la tabla
        {this.state.doctorSeleccionado && (
          <div className="doctor-detalles">
            <h2>Detalles del Doctor</h2>
            <p>ID DOCTOR: {this.state.doctorSeleccionado.idDoctor}</p>
            <p>APELLIDO: {this.state.doctorSeleccionado.apellido}</p>
            <p>ESPECIALIDAD: {this.state.doctorSeleccionado.especialidad}</p>
            <p>SALARIO: {this.state.doctorSeleccionado.salario}</p>
            <p>ID HOSPITAL: {this.state.doctorSeleccionado.idHospital}</p>
          </div>
        )} */}
      </div>
    );
  }
}
