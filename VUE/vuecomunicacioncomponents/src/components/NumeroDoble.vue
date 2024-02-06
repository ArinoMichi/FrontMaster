<template>
  <div>
    <button @click="redirectToHome()">VOLVER</button>
    <h1 style="color: red" v-if="mensaje != null">{{ mensaje }}</h1>
    <div v-else>
      <h2 style="color: blue">El numero es {{ numero }}</h2>
      <h2 style="color: green">El doble es: {{ doble }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "NumeroDoble",
  methods: {
    redirectToHome() {
      this.$router.push("/comics");
    },
  },
  watch: {
    "$route.params.numero"(nextVal, oldVal) {
      //SOLAMENTE DESEAMOS REALIZAR LAS ACCIONES CUANDO NUESTRO PARAMETRO CAMBIE
      if (nextVal != oldVal) {
        var paramNumero = parseInt(this.$route.params.numero);
        if (isNaN(paramNumero)) {
          console.log("sin parametros");
          this.mensaje = "No tenemos parametros...";
        } else {
          this.numero = paramNumero;
          this.doble = this.numero * 2;
        }
      }
    },
  },
  data() {
    return {
      mensaje: null,
      numero: 0,
      doble: 0,
    };
  },
  mounted() {
    //DIBUJAMOS NUESTRO PARAMETRO
    console.log(this.$route.params.numero);
    var paramNumero = parseInt(this.$route.params.numero);
    if (isNaN(paramNumero)) {
      console.log("sin parametros");
      this.mensaje = "No tenemos parametros...";
    } else {
      this.numero = paramNumero;
      this.doble = this.numero * 2;
    }
  },
};
</script>

<style>
</style>