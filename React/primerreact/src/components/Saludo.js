function Saludo(props){
    //PODEMOS DECLARAR VARIABLES DENTRO DE LA FUNCION
    var dato = "Mañana es fiesta y el viernes tambien";


    const {nombre,edad} = props;

    return (
    <div>
        <h1>Mi primer componente de MIERCOLES!!!</h1>
        <h2>Dato objetivo: {dato}</h2>
        <h1>No se pueden devolver mas de una etiqueta, {nombre}, con edad {edad}</h1>
    </div>)
}

export default Saludo;