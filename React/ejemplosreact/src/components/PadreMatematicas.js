import Matematicas from "./Matematicas";

function PadreMatematicas() {
  const tripleNumero = (numero) => {
    console.log("El triple desde el PARENT es: " + numero * 3);
  };
  return (
    <div>
      <h1 style={{ color: "brown" }}>SALUDO PARENT</h1>
      <Matematicas numero="6" tripleNumero={tripleNumero}></Matematicas>
      <Matematicas numero="10" tripleNumero={tripleNumero}></Matematicas>
    </div>
  );
}
export default PadreMatematicas;
