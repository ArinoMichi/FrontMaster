import React, { Component } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import HomeCoches from "./HomeCoches";
import MenuCoches from "./MenuCoches";
import InsertCoche from "./InsertCoche";
import DetallesCoche from "./DetallesCoche";
import UpdateCoche from "./UpdateCoche";
import DeleteCoche from "./DeleteCoche";

export default class Router extends Component {
  render() {
    function DetallesCocheElement() {
        var { id } = useParams();
        return <DetallesCoche idcoche={id} />;
      }
    function UpdateCocheElement(){
        var {id} = useParams();
        return <UpdateCoche idcoche = {id}/>
    }
    function DeleteCocheElement(){
        var {id} = useParams();
        return <DeleteCoche idcoche= {id}/>
    }
    return (
      <BrowserRouter>
        <MenuCoches />
        <Routes>
          <Route path="/" element={<HomeCoches />} />
          <Route path="/insertar" element={<InsertCoche/>}/>
          <Route path="/detalles/:id" element={<DetallesCocheElement/>}/>
          <Route path="/update/:id" element={<UpdateCocheElement/>}/>
          <Route path="/delete/:id" element = {<DeleteCocheElement/>}/>
        </Routes>
      </BrowserRouter>
    );
  }
}
