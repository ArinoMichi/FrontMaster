import { Component } from "react";

class Comic extends Component {

  render() {
    return (
      <div>
        <h1 style={{ color: "red" }}>{this.props.comic.titulo}</h1>
        <h2 style={{ color: "blue" }}>{this.props.comic.descripcion}</h2>
        <img src={this.props.comic.imagen} style={{width:"150px", height:"150px"}} alt=""/>
        <br/>
        <button onClick={() => {
            this.props.seleccionarFavorito(this.props.comic)
        }}>seleccionar favorito</button>
        <br/>
        <button onClick={() =>{
            var index = parseInt(this.props.indice);
            this.props.eliminarComic(index);
        }}>eliminar comic</button>
      </div>
    );
  }
}
export default Comic;
