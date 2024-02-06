import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";
import { Navigate } from "react-router-dom";

export default class CrearApuesta extends Component {
  urlApi = Global.urlapiApuestas;

  cajaUsuario = React.createRef();
  cajaRM = React.createRef();
  cajaAM = React.createRef();
  cajaFecha = React.createRef();

  state = {
    insert: false,
  };

  crearApuesta = (e) => {
    e.preventDefault();
    var request = "api/Apuestas";
    var resultado = this.cajaRM.current.value +"-"+ this.cajaAM.current.value
    var apuesta = {
      idApuesta: 0,
      usuario: this.cajaUsuario.current.value,
      resultado: resultado,
      fecha: this.cajaFecha.current.value,
    };
    console.log(apuesta)
    axios.post(this.urlApi+request, apuesta).then((response)=>{
        this.setState({
            insert:true
        })
    })
  };

  render() {
    if (this.state.insert == false) {
      return (
        <div className="container">
          <h1>NUEVA APUESTA</h1>
          <form>
            <div className="mb-3">
              <label className="form-label">USUARIO</label>
              <input
                type="text"
                className="form-control"
                ref={this.cajaUsuario}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">REAL MADRID</label>
              <input type="text" className="form-control" ref={this.cajaRM} />
            </div>
            <div className="mb-3">
              <label className="form-label">ATLETICO DE MADRID</label>
              <input type="text" className="form-control" ref={this.cajaAM} />
            </div>
            <div className="mb-3">
              <label className="form-label">FECHA</label>
              <input
                type="date"
                className="form-control"
                ref={this.cajaFecha}
              />
            </div>

            <button
              onClick={this.crearApuesta}
              type="submit"
              className="btn btn-primary"
            >
              CREAR
            </button>
          </form>
        </div>
      );
    } else {
      return(<Navigate to="/apuestas" />);
    }
  }
}
