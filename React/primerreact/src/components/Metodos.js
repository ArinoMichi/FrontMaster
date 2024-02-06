function Metodos(){
    //LOS METODOS, AL IGUAL QUE LAS VARIABLES; SE DECLARAN FUERA DE return
    const mostrarMensaje = () =>{
        console.log("Boton pulsado");
    }
    return(<div>
        <h1>Ejemplo metodos React</h1>
        <button onClick={() => mostrarMensaje()}>Mostrar mensaje</button>
    </div>)
}

export default Metodos;