import React, { Component } from "react";
import Global from "../../Global";
import axios from "axios";

export default class Empleados extends Component {
  urlEmpleados = Global.urlApiEmpleados;

  state = {
    empleados: [],
    empStatus: false
  };

  loadEmpleados = () => {
    var idDept = this.props.idDepartamento;
    console.log(idDept);
    var request = "api/Empleados/EmpleadosDepartamento/" + idDept;
    axios.get(this.urlEmpleados + request).then((response) => {
      this.setState({
        empleados: response.data,
        empStatus: true,
      });
    });
  };
  componentDidMount = () => {
    this.loadEmpleados();
  };

  componentDidUpdate(prevProps) {
    if (this.props.idDepartamento !== prevProps.idDepartamento) {
      this.loadEmpleados();
    }
  }

  render() {
    return (
      <div>
        <h1 style={{ color: "blue" }}>
          Empleados departamento {this.props.idDepartamento}
        </h1>
        <li>
          <table border="1">
            <thead>
              <tr>
                <th>Apellido</th>
                <th>Oficio</th>
                <th>salario</th>
              </tr>
            </thead>
            <tbody>
              {
              this.state.empStatus == true &&
                this.state.empleados.map((empleado, index) => {
                  return(<tr>
                    <td>{empleado.apellido}</td>
                    <td>{empleado.oficio}</td>
                    <td>{empleado.salario}</td>
                  </tr>)
                })
                }
            </tbody>
          </table>
        </li>
      </div>
    );
  }
}
