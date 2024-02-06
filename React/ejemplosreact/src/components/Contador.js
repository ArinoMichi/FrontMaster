//Para poder utilizar useState necesitamos importarlo de la libreria react
import { useState } from "react";

function Contador() {
  const [numero, setNumero] = useState(0);
  const sumarNumero = () => {
    setNumero(numero + 1);
  };

  return (
    <div>
      <h1>Ejemplo useState</h1>
      <h1 style={{ color: "blue" }}>Contador : {numero}</h1>
      <button onClick={() => sumarNumero()}>Sumar 1 al Contador</button>
      <button
        onClick={() => {
          setNumero(numero - 1);
        }}
      >
        Restar 1 al Contador
      </button>
    </div>
  );
}
export default Contador;
