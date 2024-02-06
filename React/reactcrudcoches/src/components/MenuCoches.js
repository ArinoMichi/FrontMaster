import React, { Component } from 'react'
import imagen from "../assets/images/coche.jpg"
import { NavLink } from "react-router-dom";

export default class MenuCoches extends Component {
  render() {
    return (
      <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
          <img src={imagen} alt="Logo" width="40" height="40" className="d-inline-block align-text-top"/>
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
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/insertar">
                  Insertar Coche
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    )
  }
}
