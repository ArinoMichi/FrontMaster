import React, { Component } from 'react'
import musicImage from '../assets/images/music.jpg';

export default class Musica extends Component {
  render() {
    return (
      <div>
        <h1>Musica Component</h1>
        <img src={musicImage} style={{width:"250px", height:"175px"}}/>
      </div>
    )
  }
}
