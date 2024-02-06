import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
import { Navigate } from 'react-router-dom'

export default class ModificarPersonaje extends Component {
    urlApi = Global.urlSeries;

    selectSerie = React.createRef();
    selectPersonaje = React.createRef();

    state ={
        update: false,
        series: [],
        personajes: []
    }

    updatePersonaje = (e)=>{
        e.preventDefault();

        var idSerie = parseInt(this.selectSerie.current.value);
        var idPersonaje = parseInt(this.selectPersonaje.current.value);

        var request = "api/Personajes/" + idPersonaje + "/" + idSerie;

        axios.put(this.urlApi + request).then((response) => {
            this.setState({
              update : true,
            });
          });
    }
    cargarSeries() {
        const request = "api/Series";
        axios.get(this.urlApi + request).then((response) => {
          this.setState({ series: response.data });
        });
      }
      cargarPersonajes() {
        const request = "api/Personajes";
        axios.get(this.urlApi + request).then((response) => {
          this.setState({ personajes: response.data });
        });
      }
      componentDidMount() {
        this.cargarSeries();
        this.cargarPersonajes();
      }


  render() {
    if (this.state.update == false) {
        return (
          <div className="container">
            <h1>PERSONAJES Y SERIES</h1>
            <form>
              <div className="mb-3">
                <label className="form-label">Seleccione una serie:</label>
                <select className="form-select" ref={this.selectSerie}>
                  {this.state.series.map((serie) => (
                    <option key={serie.idSerie} value={serie.idSerie}>
                      {serie.nombre}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Seleccione un personaje:</label>
                <select className="form-select" ref={this.selectPersonaje}>
                  {this.state.personajes.map((personaje) => (
                    <option key={personaje.idPersonaje} value={personaje.idPersonaje}>
                      {personaje.nombre}
                    </option>
                  ))}
                </select>
              </div>
  
              <button
                onClick={this.updatePersonaje}
                type="submit"
                className="btn btn-primary"
              >
                GUARDAR CAMBIOS
              </button>
            </form>
          </div>
        );
      } else {
        return <Navigate to={"/personajes/" + this.selectSerie.current.value} />;
      }
  }
}
