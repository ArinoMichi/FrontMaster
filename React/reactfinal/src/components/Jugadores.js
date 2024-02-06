import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default class Jugadores extends Component {
  urlApi = Global.urlapiApuestas;

  state = {
    jugadores: [],
    statusJugadores: false,
  };

  loadJugadores = () => {
    var request = "api/Jugadores/JugadoresEquipos/" + this.props.idEquipo;
    axios.get(this.urlApi+request).then((response)=>{
        this.setState({
            jugadores: response.data,
            statusJugadores:true
        })
    })

  };
  componentDidMount = () => {
    this.loadJugadores();
  };

  render() {
    {if (this.state.statusJugadores==true) {
        return (
            <div className="d-flex flex-column align-items-center justify-content-center text-center">
              <table className="table table-success table-striped-columns" style={{ width: "50%" }}>
                  <thead className="table table-dark ">
                      <tr>
                          <th>NOMBRE</th>
                          <th>IMAGEN</th>
                          <th>DETALLES</th>
                      </tr>
                  </thead>
                  <tbody>
                    {
                        this.state.jugadores.map((jugador,index)=>{
                            return(<tr>
                                <td>{jugador.nombre}</td>
                                <td><img style={{height:"100px",width:"100px"}} src={jugador.imagen}/></td>
                                <td><NavLink className="btn btn-danger" to={"/jugadoresDetalle/" + jugador.idJugador}>DETALLES</NavLink></td>
                            </tr>)
                        })
                    }
                  </tbody>
              </table>
            </div>
          );
    } else {
        return(<h1>Cargando jugadores....</h1>)
    }}
    
  }
}
