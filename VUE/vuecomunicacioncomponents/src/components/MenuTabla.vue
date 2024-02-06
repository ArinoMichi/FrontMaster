<template>
  <div>
    <ul id="menu" v-for="num in numeros" :key="num" >
      <li><router-link :to="'/tabla/'+num"> TABLA {{num}}</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MenuTabla",
  data() {
    return {
      numeros: [],
    };
  },
  mounted() {
    this.numeros = [];
    for (var i = 1; i < 10; i++) {
      var numero = parseInt(Math.random() * 100 + 1);
      this.numeros.push(numero);
    }
  },
};
</script>

<style>
#menu {
  display: inline;
  margin-right: 10px; /* Agregar un margen para separar los elementos del menú */
}
</style>