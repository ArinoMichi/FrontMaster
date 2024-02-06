import React, { Component } from 'react'
import axios from 'axios'
import Global from '../../Global'

export default class DetallesDoctor extends Component {

    urlDoctores = Global.urlApiDoctores;
    
    state = {
        doctor: null,
        statusDoc: false
    }

    loadDoctores = () =>{
        var request = "api/Doctores/" + parseInt(this.props.iddoctor);
        console.log(request)
        axios.get(this.urlDoctores + request).then((response) =>{
            this.setState({
                doctor: response.data,
                statusDoc:true
            })
        })
        console.log(this.state.doctor)

    }
    componentDidMount = () =>{
        this.loadDoctores();
    }
    componentDidUpdate = (oldProps) =>{
        if (oldProps.iddoctor != this.props.iddoctor){
            this.loadDoctores();
        }
    }




  render() {
    return (
      <div  className="d-flex flex-column align-items-center justify-content-center text-center container">
        <hr/>
        <h1 style={{color:"blue"}}>Detalle Doctor {this.props.nombre}</h1>
        {
            this.state.statusDoc == true &&
            (
                    <div>
                            <p>ID DOCTOR: {this.state.doctor.idDoctor}</p>
                            <p>APELLIDO: {this.state.doctor.apellido}</p>
                            <p>ESPECIALIDAD: {this.state.doctor.especialidad}</p>
                            <p>SALARIO: {this.state.doctor.salario}</p>
                            <p>ID HOSPITAL: {this.state.doctor.idHospital}</p>
                  </div>)
                
            
        }
      </div>
    )
  }
}
