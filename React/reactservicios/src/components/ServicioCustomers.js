import React, { Component } from "react";
import Global from "../Global";
//IMPORTAMOS LA LIBRERIA DE AXIOS
import axios from "axios";

export default class ServicioCustomers extends Component {
  //NECESITAMOS UNA URL DE ACCESO AL SERVICIO API
  urlClientes = Global.urlApiCustomers;

  //NECESITAMOS ALMACENAR DENTRO DE state UN ARRAY DE OBJETOS CUSTOMERS
  state = {
    customers: [],
  };

  //METODO PARA CARGAR TODOS LOS CLIENTES DEL SERVICIO API
  loadCustomers = () => {
    console.log("Loading Customers...");
    var request = "customers.json";
    axios.get(this.urlClientes + request).then((response) => {
      //console.log(response.data);
      this.setState({
        customers: response.data.results,
      });
    });
  };
  //TENDREMOS UN METDO DE CICLO DE VIDA PARA
  //CARGAR LOS CLIENTES SOLAMENTE AL INICIAR EL COMPONENT

  componentDidMount = () => {
    console.log("Creando component");
    this.loadCustomers();
  };

  render() {
    return (
      <div>
        <h1>ServicioCustomers</h1>
        {
        this.state.customers.map((client, index) => {
            return (<h2 style={{color:"brown"}}>{client.contactName}</h2>)
        })
        }
      </div>
    );
  }
}
