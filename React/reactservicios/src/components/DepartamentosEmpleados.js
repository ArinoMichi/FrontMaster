import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";

export default class DepartamentosEmpleados extends Component {
  urlDepartamentos = Global.urlDepartamentos;
  urlEmpleados = Global.urlApiEmpleados;

  state = {
    departamentos: [],
    empleados: [],
    statusDept: false,
    statusEmp: false,
  };

  selectDepatramento = React.createRef();

  buscarEmpleados = (e) => {
    e.preventDefault();
    var numero = this.selectDepatramento.current.value;
    console.log(numero);
    var request = "api/Empleados/empleadosdepartamento/" + numero;

    axios.get(this.urlEmpleados + request).then((response) => {
      this.setState({
        empleados: response.data,
        statusEmp: true,
      });
    });
  };

  loadDepartamentos = () => {
    var request = "api/departamentos";
    axios.get(this.urlDepartamentos + request).then((response) => {
      this.setState({
        departamentos: response.data,
        statusDept: true,
      });
    });
  };

  componentDidMount = () => {
    this.loadDepartamentos();
  };

  render() {
    return (
      <div>
        <h1>DepartamentosEmpleados</h1>
        <form>
          <label>Seleccione un departamento:</label>
          <select ref={this.selectDepatramento}>
            {this.state.statusDept == true &&
              this.state.departamentos.map((departamento, index) => {
                return (
                  <option value={departamento.Numero}>
                    {departamento.Nombre}
                  </option>
                );
              })}
          </select>
          <button onClick={this.buscarEmpleados}>Mostrar empleados</button>
        </form>
        <ul>
          {this.state.statusEmp == true &&
            this.state.empleados.map((empleado, index) => {
              return (
                <div>
                  <li>
                    Apellido: {empleado.apellido}, Oficio: {empleado.oficio}
                  </li>
                </div>
              );
            })}
        </ul>
      </div>
    );
  }
}
