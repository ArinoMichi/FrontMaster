import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


export default class MenuRutas extends Component {
  render() {
    return (
        <div>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
          <NavLink to='/tabla/5'>Tabla Multiplicar 5</NavLink>
          </li>
          <li>
          <NavLink to='/noexisto'>Sin ruta mapeada</NavLink>
          </li>

        </ul>
      </div>
    )
  }
}
