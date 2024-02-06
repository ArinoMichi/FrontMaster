<template>
  <home-alumnos-vue></home-alumnos-vue>
</template>

<script>
import HomeAlumnosVue from './components/HomeAlumnos.vue'

export default {
  name: 'App',
  components: {
    HomeAlumnosVue
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>
