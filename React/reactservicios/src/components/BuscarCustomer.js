import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";

export default class BuscarCustomer extends Component {
  urlClientes = Global.urlApiCustomers;
  cajaId = React.createRef();

  state = {
    cliente: [],
    status : false
  };

  buscarCustomer = (e) => {
    e.preventDefault();
    var idCustomer = this.cajaId.current.value;
    var request = "customers/" + idCustomer + ".json";
    axios.get(this.urlClientes + request).then((response) => {
      this.setState({
        cliente: response.data.customer,
        status: true
      });
    });
  };

  render() {
    return (
      <div>
        <h1>Buscador Customers</h1>
        <form onSubmit={this.buscarCustomer}>
          <label>ID Customer:</label>
          <input type="text" ref={this.cajaId} /> <br />
          <button>Buscar cliente</button>
        </form>
        {
        this.state.status== true &&
        (<div>
            <h1 style={{ color: "cyan" }}>
              Cliente : {this.state.cliente.contactName}
            </h1>
            <h1 style={{ color: "brown" }}>
              Empresa : {this.state.cliente.companyName}
            </h1>
            <h1 style={{ color: "pink" }}>Ciudad : {this.state.cliente.city}</h1>
            <h1 style={{ color: "green" }}>
              Cargo : {this.state.cliente.contactTitle}
            </h1>
          </div>)
        }
        
      </div>
    );
  }
}
