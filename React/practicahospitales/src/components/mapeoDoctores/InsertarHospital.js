import React, { Component } from "react";
import Global from "../../Global";
import axios, { Axios } from "axios";
import { Navigate } from "react-router-dom";

export default class InsertarHospital extends Component {
  cajaId = React.createRef();
  cajaNombre = React.createRef();
  cajaDireccion = React.createRef();
  cajaTelefono = React.createRef();
  cajaCamas = React.createRef();

  urlHospitales = Global.urlApiHospitales;

  state = {
    mensaje: "",
    statusHos: false
  };

  insertarHospital = (e) => {
    e.preventDefault();
    var request = "webresources/hospitales/post";
    //DEBEMOS RESPETAR LOS TIPOS DE DATO RESPECTO AL SERVICIO
    var idHospital= parseInt(this.cajaId.current.value);
    var nombre = this.cajaNombre.current.value;
    var direccion = this.cajaDireccion.current.value;
    var telefono = this.cajaTelefono.current.value;
    var camas = parseInt(this.cajaCamas.current.value);

    //DEBEMOS DECLARAR UN OBJETO JSON DENTRO DE REACT CON EL MISMO NOMBRE DE PROPIEDADES
    var hospital={
        idhospital: idHospital,
        nombre: nombre,
        direccion: direccion,
        telefono: telefono,
        camas: camas
    }

    console.log(hospital);
    //EL METODO POST DE AXIOS PUEDE RECIBIR DOS PARAMETROS,
    //1) URL DEL METODO POST
    //2) OBJETO A ENVIAR
    axios.post(this.urlHospitales+request, hospital).then((response)=>{
        this.setState({
            mensaje: "Hospital insertado " +nombre+" !!!",
            statusHos:true
        })
    })

  };

  render() {
    return (
      <div className="container">
        {this.state.statusHos == true &&
        (
            <Navigate to="/listahospitales"/>
        )}
        <h1>Insertar hospital</h1>
        <h2 style={{color:"brown"}}>{this.state.mensaje}</h2>
        <form>
          <div className="mb-3">
            <label className="form-label">Id Hospital</label>
            <input type="number" className="form-control" ref={this.cajaId} />
          </div>
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input type="text" className="form-control" ref={this.cajaNombre} />
          </div>
          <div className="mb-3">
            <label className="form-label">Direccion</label>
            <input
              type="text"
              className="form-control"
              ref={this.cajaDireccion}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Telefono</label>
            <input
              type="text"
              className="form-control"
              ref={this.cajaTelefono}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Camas</label>
            <input type="text" className="form-control" ref={this.cajaCamas} />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.insertarHospital}
          >
            Insertar
          </button>
        </form>
      </div>
    );
  }
}
