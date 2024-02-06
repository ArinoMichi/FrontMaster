<template>
  <div class="container">
    <h1>Tabla Component</h1>
    <div v-html="tablahtml"></div>
  </div>
</template>

<script>
export default {
  name: "TablaComponent",
  data() {
    return {
      numero: -1,
      tablahtml: "",
    };
  },
  mounted() {
    this.actualizarParametros();
  },
    watch:{
        '$route.params.numero'(nextVal,oldVal){
            //SOLAMENTE DESEAMOS REALIZAR LAS ACCIONES CUANDO NUESTRO PARAMETRO CAMBIE
            if (nextVal != oldVal) {
               this.actualizarParametros();
            }
        }
    },
  methods: {
    generarTablaHTML() {
      this.tablahtml = "";
      this.tablahtml += "<table><tbody>";
      for (let i = 1; i <= 10; i++) {
        this.tablahtml += "<tr>";
        this.tablahtml += "<td>" + this.numero + " * " + i + "</td>";
        this.tablahtml += "<td>" + this.numero * i + "</td>";
        this.tablahtml += "</tr>";
      }

      this.tablahtml += "</tbody></table>";
    },
    actualizarParametros() {
      //DIBUJAMOS NUESTRO PARAMETRO
      console.log(this.$route.params.numero);
      var paramNumero = parseInt(this.$route.params.numero);
      if (isNaN(paramNumero)) {
        alert("numero no valido!");
      } else {
        this.numero = paramNumero;
        this.generarTablaHTML();
      }
    },
  },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
</style>