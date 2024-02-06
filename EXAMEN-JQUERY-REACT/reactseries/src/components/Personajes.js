import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

export default class Personajes extends Component {
    urlApi = Global.urlSeries;

    state ={
        personajes: [],
        statusPersonajes: false
    }

    loadPersonajes=()=>{
    var request = "api/Series/PersonajesSerie/" + parseInt(this.props.idSerie);
    axios.get(this.urlApi+request).then((response)=>{
        this.setState({
            personajes: response.data,
            statusPersonajes:true
        })
    })
    }
    componentDidMount=()=>{
        this.loadPersonajes();
    }

  render() {
    {if (this.state.statusPersonajes==true) {
        return (
            <div className="d-flex flex-column align-items-center justify-content-center text-center">
                <NavLink to={"/serie/" + this.props.idSerie} className="btn btn-primary">
                VOLVER
              </NavLink>
              <table className="table table-dark" style={{ width: "50%" }}>
                  <thead className="table table-dark ">
                      <tr>
                          <th>PERSONAJE</th>    
                          <th>IMAGEN</th>
                      </tr>
                  </thead>
                  <tbody>
                    {
                        this.state.personajes.map((personaje,index)=>{
                            return(<tr>
                                <td>{personaje.nombre}</td>
                                <td><img style={{height:"100px",width:"100px"}} src={personaje.imagen}/></td>
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
