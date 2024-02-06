import React, { Component } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import HomeDepartamentos from "./HomeDepartamentos";
import MenuDepartamentos from "./MenuDepartamentos";
import CreateDepartamento from "./CreateDepartamento";
import DetalleDepartamento from "./DetalleDepartamento";
import BorrarDepartamento from "./BorrarDepartamento";
import UpdateDepartamento from "./UpdateDepartamento";

export default class Router extends Component {
  render() {
    function DetallesDepartamentoElement() {
      var { id } = useParams();
      return <DetalleDepartamento iddepartamento={id} />;
    }
    function EliminarDepartamentoElement() {
      var { iddepartamento } = useParams();
      return <BorrarDepartamento iddepartamento={iddepartamento} />;
    }
    function UpdateDepartamentoElement () {
      var {iddepartamento} = useParams();
      return <UpdateDepartamento iddepartamento= {iddepartamento}/>
    }
    return (
      <BrowserRouter>
        <MenuDepartamentos />
        <Routes>
          <Route path="/" element={<HomeDepartamentos />} />
          <Route path="/createdep" element={<CreateDepartamento />} />
          <Route
            path="/detalledep/:id"
            element={<DetallesDepartamentoElement />}
          />
          <Route
            path="/delete/:iddepartamento"
            element={<EliminarDepartamentoElement />}
          />
          <Route path="/update/:iddepartamento" element={<UpdateDepartamentoElement/>}/>
        </Routes>
      </BrowserRouter>
    );
  }
}
