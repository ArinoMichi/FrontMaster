import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";

export default class EmpleadosOficios extends Component {
  urlEmpleados = Global.urlApiEmpleados;

  state = {
    oficios: [],
    empleados: [],
    statusOfi: false,
    statusEmp: false
  };

  selectOficio = React.createRef();

  mostrarEmpleados = (e) =>{
    e.preventDefault();
    var oficio = this.selectOficio.current.value;
    var request = "api/Empleados/EmpleadosOficio/" + oficio;
    console.log(request);

    axios.get(this.urlEmpleados+request).then((response) =>{
        this.setState({
            empleados: response.data,
            statusEmp:true
        })
    })
  }

  cargarOficios = () => {
    var request = "api/Empleados/oficios";

    axios.get(this.urlEmpleados + request).then((response) => {
      this.setState({
        oficios: response.data,
        statusOfi: true
      });
    });
  };

  componentDidMount = () => {
    this.cargarOficios();
  };

  render() {
    return (
      <div>
        <h1>EmpleadosOficios</h1>
        <form onSubmit={this.mostrarEmpleados}>
          <label >Seleccione Oficio:</label>
          <select ref={this.selectOficio}>
            {
            
            this.state.oficios.map((nombre, index) => {
              return <option>{nombre}</option>;
            })
            
            }
          </select>
          <button>Mostrar empleados</button>
        </form>
        {
            this.state.statusEmp == true &&
            (<table border="1">
                <thead>
                    <tr>
                        <th>idEmpleado</th>
                        <th>apellido</th>
                        <th>oficio</th>
                        <th>salario</th>
                        <th>departamento</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.empleados.map((empleado, index) =>{
                            return(<tr>
                                <td>{empleado.idEmpleado}</td>
                                <td>{empleado.apellido}</td>
                                <td>{empleado.oficio}</td>
                                <td>{empleado.salario}</td>
                                <td>{empleado.departamento}</td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>)
        }
      </div>
    );
  }
}
