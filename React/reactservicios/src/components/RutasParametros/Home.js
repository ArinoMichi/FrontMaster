import React, { Component } from 'react'
import imageHome from "../../assets/images/Home.jpg"

export default class Home extends Component {
  render() {
    return (
      <div>
        <img src={imageHome} style={{width:"350px", height:"350px"} }></img>
      </div>
    )
  }
}
