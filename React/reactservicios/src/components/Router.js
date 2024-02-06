import React, { Component } from 'react'
import {BrowserRouter, Routes, Route, useParams} from 'react-router-dom'
import Home from './RutasParametros/Home'
import NotFound from './RutasParametros/NotFound'
import TablaMultiplicar from './RutasParametros/TablaMultiplicar'
import Collatz from './RutasCollatz/Collatz'
import MenuRutas from './RutasParametros/MenuRutas'
import MenuRutasCollatz from './RutasCollatz/MenuRutasCollatz'

export default class Router extends Component {

    render (){
        function TablaMultiplicarElement() {
            //ESTA FUNCION PERMITE CAPTURAR LOS PARAMETROS DE LA RUTA DE FORMA DINAMICA
            //VAMOS A RECIBIR UN PARAMETRO LLAMADO minumero
            var {minumero} = useParams();
            //DEVOLVEMOS LA ETIQUETA <TablaMultiplicar/> CON SU props DE NUMERO
            return <TablaMultiplicar numero={minumero}/>
        }
        function CollatzElement() {
          var {num} = useParams();
          return <Collatz num={num}/>
        }
    return (
      <BrowserRouter>
      <h1 style={{color:"brown"}}>Menu en router</h1>
      <MenuRutasCollatz/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/tabla/:minumero' element= {<TablaMultiplicarElement/>}/>
            <Route path='*' element={<NotFound/>}/>
            <Route path='/collatz/:num' element={<CollatzElement/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}
