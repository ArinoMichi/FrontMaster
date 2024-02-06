import React, { Component } from "react";

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
          <a href='/cine'>Cine</a>
          </li>
          <li>
          <a href='/musica'>Musica</a>
          </li>
          <li>
            <a href="/formulario">Enviar Datos</a>
          </li>
          <li>
            <a href="/teoria">Teoria de Collatz</a>
          </li>
          <li>
            <a href="/tabla">Tabla de Multiplicar</a>
          </li>
        </ul>
      </div>
    );
  }
}
