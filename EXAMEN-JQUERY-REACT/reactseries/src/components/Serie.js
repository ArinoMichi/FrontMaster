import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default class Serie extends Component {
  urlApi = Global.urlSeries;
  state = {
    serie: {},
    statusSerie: false,
  };

  cargarDatosSerie = () => {
    var request = "api/Series/" + parseInt(this.props.idSerie);
    axios.get(this.urlApi + request).then((response) => {
      this.setState({
        serie: response.data,
        statusSerie: true,
      });
    });
  };

  componentDidMount = () => {
    this.cargarDatosSerie();
  };
  componentDidUpdate = (oldProps) => {
    if (oldProps.idSerie != this.props.idSerie) {
      this.cargarDatosSerie();
    }
  };
  render() {
    return (
      <div className="container my-5">
        {this.state.statusSerie && (
          <div className="card mx-auto" style={{width:"18rem"}} id="serie">
            <img src={this.state.serie.imagen} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{this.state.serie.nombre}</h5>
              <p className="card-text">
                IMDB: {this.state.serie.puntuacion}
              </p>
              <NavLink to={"/personajes/" + this.state.serie.idSerie} className="btn btn-primary">
                PERSONAJES
              </NavLink>
            </div>
          </div>
        )}
      </div>
    );
  }
}
