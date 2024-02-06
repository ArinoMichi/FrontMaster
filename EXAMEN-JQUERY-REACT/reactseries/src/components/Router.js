import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import HomeSeries from './HomeSeries';
import NuevoPersonaje from './NuevoPersonaje';
import ModificarPersonaje from './ModificarPersonaje';
import MenuSeries from './MenuSeries';
import Serie from './Serie';
import Personajes from './Personajes';

export default class Router extends Component {
  render() {
    function SerieElement(){
        var {id}=useParams();
        return <Serie idSerie={id}/>
    }
    function PersonajesElement(){
        var {id}=useParams();
        return <Personajes idSerie={id}/>
    }


    return (
        <BrowserRouter>
        <MenuSeries/>
        <Routes>
          <Route path="/" element={<HomeSeries />} />
          <Route path='/nuevopersonaje' element={<NuevoPersonaje/>}/>
          <Route path='/modificarpersonaje' element={<ModificarPersonaje/>}/>
          <Route path='/serie/:id' element={<SerieElement/>}/>
          <Route path='/personajes/:id' element={<PersonajesElement/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}
