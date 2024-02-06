function SaludoHijo(props){
    //CAPTURAMOS EN UNA VARIABLE DE METODO EL PROPS 
    //QUE VIENE DEL PARENT (metodoPadre)
    var ejecutarPadre = props.metodoPadre;
    var idhijo = props.idhijo;

    //const{ idhijo, ejecutarPadre} = props;


    return(<div>
        <h1 style={{color: "blue"}}>SALUDO HIJO</h1>
        <button onClick={() => ejecutarPadre('Luke ' + idhijo)}>Llamar al Parent</button>
    </div>)
}
export default SaludoHijo;