import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { Navigate } from "react-router-dom";

export default class NuevoPersonaje extends Component {
  urlApi = Global.urlSeries;

  cajaNombre = React.createRef();
  cajaImagen = React.createRef();
  selectSerie = React.createRef();

  state = {
    insert: false,
    series: [],
  };

  cargarSeries() {
    const request = "api/Series";
    axios.get(this.urlApi + request).then((response) => {
      this.setState({ series: response.data });
    });
  }

  crearPersonaje = (e) => {
    e.preventDefault();
    var request = "api/Personajes";
    var nombre = this.cajaNombre.current.value;
    var imagen = this.cajaImagen.current.value;
    var idSerie = parseInt(this.selectSerie.current.value);

    var personaje = {
      idPersonaje: 0,
      nombre: nombre,
      imagen: imagen,
      idSerie: idSerie,
    };

    console.log(personaje);
    axios.post(this.urlApi + request, personaje).then((response) => {
      this.setState({
        insert: true,
      });
    });
  };

  componentDidMount() {
    this.cargarSeries();
  }
  render() {
    if (this.state.insert == false) {
      return (
        <div className="container">
          <h1>NUEVO PERSONAJE</h1>
          <form>
            <div className="mb-3">
              <label className="form-label">NOMBRE</label>
              <input
                type="text"
                className="form-control"
                ref={this.cajaNombre}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">IMAGEN</label>
              <input
                type="text"
                className="form-control"
                ref={this.cajaImagen}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Serie</label>
              <select className="form-select" ref={this.selectSerie}>
                {this.state.series.map((serie) => (
                  <option key={serie.idSerie} value={serie.idSerie}>
                    {serie.nombre}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={this.crearPersonaje}
              type="submit"
              className="btn btn-primary"
            >
              INSERTAR PERSONAJE
            </button>
          </form>
        </div>
      );
    } else {
      return <Navigate to={"/personajes/" + this.selectSerie.current.value} />;
    }
  }
}
