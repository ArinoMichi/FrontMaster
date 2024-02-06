import React, { Component } from 'react'
import {BrowserRouter, Routes, Route, useParams} from 'react-router-dom'
import Doctores from './mapeoDoctores/Doctores'
import Home from './mapeoDoctores/Home'
import MenuHospitales from './mapeoDoctores/MenuHospitales'
import Hospitales from './mapeoDoctores/Hospitales'
import DetallesDoctor from './mapeoDoctores/DetallesDoctor'
import InsertarHospital from './mapeoDoctores/InsertarHospital'
import ListaHospitales from './mapeoDoctores/ListaHospitales'

export default class Router extends Component {
  render() {

        function DoctoresElement(){
            var{id} = useParams();
            return <Doctores idHospital={id}/>
        }
        function DetallesDoctorElement(){
          var{iddoctor, nombre} = useParams();
          return <DetallesDoctor iddoctor={iddoctor} nombre={nombre}/>
        }
    return (
      <BrowserRouter>
      <MenuHospitales/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/hospitales' element={<Hospitales/>}/>
                <Route path='/doctores/:id' element={<DoctoresElement/>}/>
                <Route path='/detallesdoctor/:iddoctor/:nombre' element={<DetallesDoctorElement/>}/>
                <Route path='/createhospital' element={<InsertarHospital/>}/>
                <Route path='/listahospitales' element={<ListaHospitales/>}/>
                
            </Routes>
      </BrowserRouter>
    )
  }
}
