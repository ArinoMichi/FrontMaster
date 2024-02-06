function Matematicas(props) {
  var tripleNumero = props.tripleNumero;
  var numero = parseInt(props.numero);

  const dobleNumero = () => {
    var resultado = numero * 2;
    console.log("El doble desde el HIJO es " + resultado);
  };
  return (
    <div>
      <h1 style={{ color: "blue" }}>SALUDO HIJO</h1>
      <button onClick={() => tripleNumero(2)}>Triplicar numero</button>
      <button onClick={() => dobleNumero()}>Duplicar numero</button>
    </div>
  );
}
export default Matematicas;
