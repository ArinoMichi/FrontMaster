import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";
import { Navigate } from "react-router-dom";

export default class InsertCoche extends Component {
  urlCoches = Global.apiCoches;

  cajaId = React.createRef();
  cajaMarca = React.createRef();
  cajaModelo = React.createRef();
  cajaConductor = React.createRef();
  cajaImagen = React.createRef();

  state = {
    statusPost: false,
  };

  insertarCoche = (e) => {
    e.preventDefault();
    var request = "api/Coches/InsertCoche";
    var id = parseInt(this.cajaId.current.value);
    var marca = this.cajaMarca.current.value;
    var modelo= this.cajaModelo.current.value;
    var conductor = this.cajaConductor.current.value;
    var imagen = this.cajaImagen.current.value;
    var coche = {
      idCoche: id,
      marca: marca,
      modelo: modelo,
      conductor: conductor,
      imagen: imagen,
    };
    console.log(coche)
    console.log(this.urlCoches + request)

    axios.post(this.urlCoches + request, coche).then((response) => {
      
      this.setState({
        statusPost: true,
      });
    });
  };

  render() {
    if (this.state.statusPost == false) {
      return (
        <div className="container">
          <h1>INSERTAR COCHE</h1>
          <form>
            <div className="mb-3">
              <label className="form-label">ID</label>
              <input type="number" className="form-control" ref={this.cajaId} />
            </div>
            <div className="mb-3">
              <label className="form-label">MARCA</label>
              <input
                type="text"
                className="form-control"
                ref={this.cajaMarca}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">MODELO</label>
              <input
                type="text"
                className="form-control"
                ref={this.cajaModelo}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">CONDUCTOR</label>
              <input
                type="text"
                className="form-control"
                ref={this.cajaConductor}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">IMAGEN (url)</label>
              <input
                type="text"
                className="form-control"
                ref={this.cajaImagen}
              />
            </div>

            <button
              onClick={this.insertarCoche}
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
