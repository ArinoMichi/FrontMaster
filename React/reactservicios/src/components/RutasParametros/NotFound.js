import React, { Component } from 'react'
import imagenNotFound from "../../assets/images/notfound.jpg"

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <img src={imagenNotFound} style={{width:"350px", height:"350px"} }></img>
      </div>
    )
  }
}
