<template>
  <div>
    <MenuComponent/>
    <hr/>
    <MenuTabla/>
  <router-view></router-view>
  </div>
</template>

<script>
import MenuComponent from './components/MenuComponent.vue';
import MenuTabla from './components/MenuTabla.vue';


export default {
  name: "App",
  components: {
    MenuComponent,
    MenuTabla,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
