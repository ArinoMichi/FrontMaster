import React, { Component } from 'react'
import docGif from "../../assets/images/doc.gif";


export default class Home extends Component {
  render() {
    return (
      <div className='d-flex flex-column align-items-center justify-content-center text-center'>
        <h1 style={{color:"brown"}}>Bienvenido! Elige un hospital para ver los doctores</h1>
        <img src={docGif} className="rounded img-fluid d-block"></img>

      </div>
    )
  }
}
