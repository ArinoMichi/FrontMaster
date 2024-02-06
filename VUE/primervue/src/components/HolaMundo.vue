<template>
  <div>
    <h1>Mi primera App VUE!!!</h1>
    <img class="img" src="./../assets/images/onigiri.jpg"/>
    <h2>
      su nombre es:
      <span style="color: gray">{{ nombre }}</span>
    </h2>
    <h2>
      su numero es:
      <span style="color: gray">{{ numero }}</span>
    </h2>
  </div>
</template>

<script>
//SIEMPRE DEBEMOS EXPORTAR EL NOMBRE QUE DESEEMOS
//DAR AL COMPONENT EN NUESTRA APLICACION VUE
export default {
  name: "HolaMundo",
  data() {
    //AQUI DENTRO DEBEMOS DECLARAR NUESTRAS VARIABLES,
    //NO SE UTILIZAN PALABRAS ESPECIALES PARA SU DECLARACION
    //LA DECLARACION DE LAS VARIABLES SE REALIZA CON RETURN Y
    //UN OBJETO JSON QUE CONTENDRA LAS VARIABLE Y SUS VALORES
    return {
      nombre: "Alumno",
      numero: 14,
      miArray: [],
      objeto: {},
    };
  },
};
</script>

<style>
h1 {
  color: brown;
}
 @import './../assets/css/estilos.css'
</style>