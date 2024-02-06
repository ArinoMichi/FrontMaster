import React, { Component } from "react";
import imagen from "../assets/images/champions.png";
import { NavLink } from "react-router-dom";
import MostrarEquipos from "./MostrarEquipos";
import BuscarJugador from "./BuscarJugador";

export default class MenuApuestas extends Component {
  
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img
                src={imagen}
                alt="Logo"
                width="40"
                height="40"
                className="d-inline-block align-text-top"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/apuestas">
                    Apuestas
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Equipos
                  </a>
                  <MostrarEquipos />
                </li>
                <BuscarJugador/>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
