import React, { Component } from 'react'
import Empleados from './Empleados'
import Global from '../../Global';
import axios from 'axios';

export default class Departamentos extends Component {
    selectDepartamento = React.createRef();

    urlDepartamentos = Global.urlDepartamentos;

    state = {
        idDepartamento: -1,
        departamentos: [],
        statusDept: false
    }

    loadDepartamentos = () => {
        var request = "api/departamentos";
        axios.get(this.urlDepartamentos + request).then((response) =>{
            this.setState({
                departamentos: response.data,
                statusDept: true
            })
        })
    }

    buscarEmpleados = (e) =>{
        e.preventDefault();
        //RECUPERAMOS EL ID DEL SELECT
        var id = this.selectDepartamento.current.value;
        this.setState({
            idDepartamento: id
        })

    }

    componentDidMount = () =>{
        this.loadDepartamentos();
    }
  render() {
    return (
      <div>
        <h1>Departamentos</h1>
        <form onSubmit={this.buscarEmpleados}>
            <label>Seleccione un departamento</label>
            <select ref={this.selectDepartamento}>
                {
                this.state.statusDept == true &&
                (
                    this.state.departamentos.map((departamento, index) =>{
                        return (<option value={departamento.Numero}>{departamento.Nombre}</option>)
                    })
                )
            }</select>
            <button>Mostrar empleados</button>
            <h2 style={{color:"red"}}> Departamento seleccionado: {this.state.idDepartamento}</h2>
        </form>
        {
            this.state.idDepartamento != -1 &&
            (<Empleados idDepartamento = {this.state.idDepartamento}/>)
        }
      </div>
    )
  }
}
