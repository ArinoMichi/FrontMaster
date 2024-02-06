import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

export default class UpdateDepartamento extends Component {

    cajaNumero = React.createRef();
    cajaNombre = React.createRef();
    cajaLocalidad = React.createRef();
    
    urlDepartamento = Global.apiDepartamentos;

    state = {
        departamento: {},
        statusGet: false,
        statusUpdate: false
    }


    findDepartamento = () =>{
        var request = "api/departamentos/" + this.props.iddepartamento;
        axios.get(this.urlDepartamento + request).then((response)=>{
            this.setState({
                departamento: response.data,
                statusGet: true
            })
        })
    }

    updateDepartamento = (e) =>{
        e.preventDefault();
        var request = "api/departamentos/";
        var departamento ={
            numero: this.state.departamento.numero,
            nombre: this.cajaNombre.current.value,
            localidad: this.cajaLocalidad.current.value
          }
        axios.put(this.urlDepartamento + request, departamento).then((response) =>{
            this.setState({
                statusUpdate: true
            })
        })
    }

    componentDidMount = () =>{
        this.findDepartamento();
    }


  render() {
    return (
      <div className="container">
        <h1>Update Departamento {this.props.iddepartamento}</h1>
        {
            this.state.statusGet == true && (
              <form>
                <div className="mb-3">
                  <input type="hidden" className="form-control" ref={this.cajaNumero} defaultValue={this.state.departamento.cajaNumero}/>
                  
                </div>
                <div className="mb-3">
                  <label className="form-label">Nombre</label>
                  <input type="text" className="form-control" ref={this.cajaNombre} defaultValue={this.state.departamento.nombre}/>
                </div>
                <div className="mb-3">
                  <label className="form-label">Localidad</label>
                  <input type="text" className="form-control" ref={this.cajaLocalidad} defaultValue={this.state.departamento.localidad}/>
                </div>
      
                <button onClick={this.updateDepartamento} type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            )
        }
        {
            this.state.statusUpdate == true && (
             <Navigate to="/"/>
            )
        }
      </div>
    )
  }
}
