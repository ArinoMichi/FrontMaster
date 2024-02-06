import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Hospitales from "./Hospitales";

export default class MenuHospitales extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Menu Hospitales
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/createhospital">
                    Insertar Hospital
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/listahospitales">
                    Hospitales
                  </NavLink>
                </li>
                <Hospitales/>

              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
