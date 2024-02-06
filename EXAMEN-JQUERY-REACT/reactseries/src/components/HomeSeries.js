import React, { Component } from 'react'
import imagen from "../assets/images/home.jpg"

export default class HomeSeries extends Component {
  render() {
    return (
      <div>
        <img src={imagen} style={{height: "100%", width: "100%"}}/>
      </div>
    )
  }
}
