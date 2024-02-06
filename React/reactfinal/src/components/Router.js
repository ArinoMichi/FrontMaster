import React, { Component } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import HomeApuestas from "./HomeApuestas";
import MenuApuestas from "./MenuApuestas";
import Apuestas from "./Apuestas";
import DetallesEquipo from "./DetallesEquipo";
import Jugadores from "./Jugadores";
import DetallesJugador from "./DetallesJugador";
import CrearApuesta from "./CrearApuesta";

export default class Router extends Component {
  render() {
    function DetallesEquipoElement(){
        var {id} = useParams();
        return <DetallesEquipo idEquipo={id}/>;
    }
    function JugadoresElement(){
        var {id} =useParams();
        return <Jugadores idEquipo={id}/>;
    }
    function DetallesJugadorElement(){
        var {id}=useParams();
        return <DetallesJugador idJugador={id}/>
    }

    return (
      <BrowserRouter>
        <MenuApuestas />
        <Routes>
          <Route path="/" element={<HomeApuestas />} />
          <Route path="/apuestas" element={<Apuestas/>}/>
          <Route path="/detalles/:id" element={<DetallesEquipoElement/>}/>
          <Route path="/jugadores/:id" element={<JugadoresElement/>}/>
          <Route path="/jugadoresDetalle/:id" element={<DetallesJugadorElement/>}/>
          <Route path="/insert" element={<CrearApuesta/>}/>
        </Routes>
      </BrowserRouter>
    );
  }
}
