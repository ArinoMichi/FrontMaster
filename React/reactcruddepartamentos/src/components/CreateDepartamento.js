import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";
import { Navigate } from "react-router-dom";

export default class CreateDepartamento extends Component {

    urlDepartamento = Global.apiDepartamentos;
    cajaNumero = React.createRef();
    cajaNombre = React.createRef();
    cajaLocalidad = React.createRef();

    state={
        status:false
    }

    insertDepartamento=(e) =>{
        e.preventDefault();
        var request = "api/Departamentos";
        var num = parseInt(this.cajaNumero.current.value);
        var nom = this.cajaNombre.current.value;
        var loc = this.cajaLocalidad.current.value;
        var departamento={
            numero: num,
            nombre: nom,
            localidad: loc
        }
        axios.post(this.urlDepartamento + request, departamento).then((response)=>{
            this.setState({
                status:true
            })
        })

    }
    

  render() {
    if (this.state.status==false) {
        return (
            <div className="container">
              <h1>CreateDepartamento</h1>
              <form>
                <div className="mb-3">
                  <label className="form-label">Numero</label>
                  <input type="text" className="form-control" ref={this.cajaNumero}/>
                </div>
                <div className="mb-3">
                  <label className="form-label">Nombre</label>
                  <input type="text" className="form-control" ref={this.cajaNombre} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Localidad</label>
                  <input type="text" className="form-control" ref={this.cajaLocalidad} />
                </div>
      
                <button onClick={this.insertDepartamento} type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          );
    }else{
       return( <Navigate to="/"/>)
    }
   
  }
}
