import React, { Component } from 'react'
import imagen from "../assets/images/nav.png"
import { NavLink } from "react-router-dom";
import MostrarSeries from './MostrarSeries';

export default class MenuSeries extends Component {
  render() {
    return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">
                <img
                  src={imagen}
                  alt="Logo"
                  width="100"
                  height="60"
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
                    <NavLink className="nav-link" to="/nuevopersonaje">
                      Nuevo Personaje
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/modificarpersonaje">
                      Modificar Personaje
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
                      Series
                    </a>
                    <MostrarSeries />
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      );
  }
}
