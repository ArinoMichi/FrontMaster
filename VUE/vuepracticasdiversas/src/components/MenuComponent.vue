<template>
  <div>
    <ul id="menu">
        <li><router-link to="/"> Home</router-link></li>
        <li><router-link to="/collatz">COLLATZ</router-link></li>
        <li><router-link to="/tablamultiplicar">TABLA</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
    name: "MenuComponent"
}
</script>

<style>
  #menu li {
    display: inline;
    margin-right: 10px; /* Agregar un margen para separar los elementos del menú */
  }
</style>