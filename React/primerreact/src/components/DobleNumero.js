function DobleNumero(){
    var ejemplo = "Soy una variable de lunes";
    const numeroDoble = (numero) =>{
        var doble = numero *2;
        console.log(doble);
    }

    const cambiarVariable = () => {
        console.log("Antes: " + ejemplo);
        ejemplo = "He cambiado de valor!!!";
        console.log("Despues: " + ejemplo);
    }

    var estilo = {
        color: "white",
        backgroundColor: "purple"
    }

    return (<div>
        <h1 style={estilo}>Ejemplo parámetros</h1>
        <h2 style={{color: "pink"}}>{ejemplo}</h2>
        <hr/>
        <button onClick={()=>numeroDoble(7)}>Doble 7</button>
        <button onClick={()=> numeroDoble(20)}>Doble 20</button>
        <button onClick={() => cambiarVariable()}>Cambiar variable</button>
    </div>)
}
export default DobleNumero;