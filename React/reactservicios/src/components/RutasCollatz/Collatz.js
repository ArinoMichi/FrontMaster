import React, { Component } from 'react'

export default class Collatz extends Component {
    state = {
        numeros: [],
        estadoLista: false
    }

    generarLista = () =>{
        var aux = [];
        var num = parseInt(this.props.num);
        while (num !=1) {
            if ((num % 2) ==0) {
                num = num/2;
                aux.push(num);
            } else{
                num =num*3 +1;
                aux.push(num);
            }
        }
        this.setState({
            numeros: aux,
            estadoLista:true
        });
    }



    componentDidMount = () =>{
        this.generarLista();
    }

    componentDidUpdate = (prevProps) =>{
        if (this.props.num !== prevProps.num) {
            this.generarLista();
          }
    }



  render() {
    return (
      <div>
        <h1>Collatz de {this.props.num}</h1>
        <ul>
        {
            this.state.estadoLista == true &&
            (
            this.state.numeros.map((num, index) =>{
                return(<li key={index}>{num}</li>)
            })
            )
        }
        </ul>
      </div>
    )
  }
}
