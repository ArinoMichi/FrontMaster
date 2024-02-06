<template>
  <div>
    <ul id="menu">
      <li>
        <router-link to="/">HOME</router-link>
      </li>
      <li>
        <router-link to="/cine">CINE</router-link>
      </li>
      <li>
        <router-link to="/musica">MUSICA</router-link>
      </li>
      <li>
        <router-link to="/ciclovida">CICLO VIDA</router-link>
      </li>
      <li>
        <router-link to="/directivas">DIRECTIVAS</router-link>
      </li>
      <li>
        <router-link to="/propiedad">PROPIEDAD CONMUTADA</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MenuComponent"
};
</script>

<style scoped>
  #menu li {
    display: inline;
    margin-right: 10px; /* Agregar un margen para separar los elementos del menú */
  }
</style>
