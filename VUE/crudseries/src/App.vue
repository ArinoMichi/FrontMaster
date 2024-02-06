<template>
  <div>
    <menu-series/>
    <router-view></router-view>
  </div>
</template>

<script>
import MenuSeries from './components/MenuSeries.vue'


export default {
  name: 'App',
  components: {
    MenuSeries
    
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
