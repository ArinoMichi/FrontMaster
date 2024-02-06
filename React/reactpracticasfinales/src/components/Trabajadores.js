import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";

export default class Trabajadores extends Component {
  urlApi = Global.apiHospitalesTrabajadores;

  cajaIncremento = React.createRef();

  state = {
    trabajadores: [],
    statusTrabajadores: false,
  };

  loadTrabajadores = () => {
    // return(<p>Opciones seleccionadas:{this.props.idHospital.join(', ')}</p>)
    var request = "api/Trabajadores/TrabajadoresHospitales?";
    var consulta = "";
    if (this.props.idHospital.length > 1) {
      for (let i = 0; i < this.props.idHospital.length; i++) {
        consulta += "idhospital=" + this.props.idHospital[i] + "&";
      }
    } else {
      consulta += "idhospital=" + this.props.idHospital;
    }
    console.log(this.urlApi + request + consulta);

    axios.get(this.urlApi + request + consulta).then((response) => {
      this.setState({
        trabajadores: response.data,
        statusTrabajadores: true,
      });
    });

    console.log(consulta);
  };

  incrementarSalario = (e) => {
    e.preventDefault();
    var request = "api/Trabajadores/UpdateSalarioTrabajadoresHospitales?";
    var incremento = parseInt(this.cajaIncremento.current.value);
    var consulta = "incremento=" + incremento + "&";
    if (this.props.idHospital.length > 1) {
      for (let i = 0; i < this.props.idHospital.length; i++) {
        consulta += "idhospital=" + this.props.idHospital[i] + "&";
      }
    } else {
      consulta += "idhospital=" + this.props.idHospital;
    }

    axios.put(this.urlApi + request + consulta).then((response) => {
      this.loadTrabajadores();
    });
    console.log(request + consulta);
  };

  componentDidMount = () => {
    this.loadTrabajadores();
  };
  componentDidUpdate = (oldProps) => {
    if (oldProps.idHospital != this.props.idHospital) {
      this.loadTrabajadores();
    }
  };

  render() {
    return (
      <div>
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>ID TRABAJADOR</th>
              <th>APELLIDO</th>
              <th>OFICIO</th>
              <th>SALARIO</th>
              <th>ID HOSPITAL</th>
            </tr>
          </thead>
          <tbody>
            {this.state.statusTrabajadores == true &&
              this.state.trabajadores.map((trabajador, index) => {
                return (
                  <tr>
                    <td>{trabajador.idTrabajador}</td>
                    <td>{trabajador.apellido}</td>
                    <td>{trabajador.oficio}</td>
                    <td>{trabajador.salario}</td>
                    <td>{trabajador.idHospital}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <form className="mt-3">
          <div className="form-group">
            <label htmlFor="cajaIncremento">INCREMENTO:</label>
            <input
              type="number"
              className="form-control"
              id="cajaIncremento"
              ref={this.cajaIncremento}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.incrementarSalario}
          >
            INCREMENTAR
          </button>
        </form>
      </div>
    );
  }
}
