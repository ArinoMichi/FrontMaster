import React, { Component } from 'react'
import casaImage from '../assets/images/home.jpg';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home Component</h1>
      <img src={casaImage} style={{width:"250px", height:"175px"}}/>
      </div>
    )
  }
}
