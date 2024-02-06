<template>
  <div>
    <ul id="menu">
        <li><router-link to="/comics"> COMICS</router-link></li>
        <li><router-link to="/numeros">NUMEROS</router-link></li>
        <li><router-link to="/deportes">DEPORTES</router-link></li>
        <li><router-link to="/seleccionMultiple">ANIMALES</router-link></li>
        <li><router-link to="/checkbox">CHECKBOX</router-link></li>
        <li><router-link to="/numerodoble">NUMERO DOBLE</router-link></li>
        <li><router-link to="/numerodoble/77">NUMERO DOBLE 77</router-link></li>
        <li><router-link to="/numerodoble/22">NUMERO DOBLE 22</router-link></li>
        <li><router-link to="/numerodoble/100">NUMERO DOBLE 100</router-link></li>
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