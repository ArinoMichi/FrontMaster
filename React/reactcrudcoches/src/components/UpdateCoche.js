import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";
import { Navigate } from "react-router-dom";

export default class UpdateCoche extends Component {
  cajaId = React.createRef();
  cajaMarca = React.createRef();
  cajaModelo = React.createRef();
  cajaConductor = React.createRef();
  cajaImagen = React.createRef();

  urlCoches = Global.apiCoches;
  state = {
    coche: {},
    statusGet: false,
    statusPut: false,
  };

  loadCoche = () => {
    var request = "api/Coches/FindCoche/" + this.props.idcoche;
    axios.get(this.urlCoches + request).then((response) => {
      this.setState({
        coche: response.data,
        statusGet: true,
      });
    });
  };

  updateCoche = (e) => {
    e.preventDefault();
    var request = "api/Coches/UpdateCoche";
    var coche = {
      idCoche: parseInt(this.state.coche.idCoche),
      marca: this.cajaMarca.current.value,
      modelo: this.cajaModelo.current.value,
      conductor: this.cajaConductor.current.value,
      imagen: this.cajaImagen.current.value,
    };
    console.log(coche.idCoche + coche.conductor);
    axios.put(this.urlCoches + request, coche).then((response) => {
      this.setState({
        statusPut: true
      });
    });
  };
  componentDidMount = () => {
    this.loadCoche();
  };

  render() {
    if (this.state.statusPut == false) {
      return (
        <div className="container">
          <h1>MODIFICAR COCHE {this.props.idcoche}</h1>
          <form>
            <div className="mb-3">
              <label className="form-label">MARCA</label>
              <input
                type="text"
                className="form-control"
                ref={this.cajaMarca}
                defaultValue={this.state.coche.marca}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">MODELO</label>
              <input
                type="text"
                className="form-control"
                ref={this.cajaModelo}
                defaultValue={this.state.coche.modelo}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">CONDUCTOR</label>
              <input
                type="text"
                className="form-control"
                ref={this.cajaConductor}
                defaultValue={this.state.coche.conductor}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">IMAGEN (url)</label>
              <input
                type="text"
                className="form-control"
                ref={this.cajaImagen}
                defaultValue={this.state.coche.imagen}
              />
            </div>

            <button
              onClick={this.updateCoche}
              type="submit"
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </div>
      );
    } else {
      return <Navigate to="/" />;
    }
  }
}
