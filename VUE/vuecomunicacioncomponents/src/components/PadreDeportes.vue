<template>
  <div>
    <h1 style="color:green">Padre deportes</h1>
    <ul style="list-style-type: none">
        <li v-for="deporte in deportes" :key="deporte">
            <HijoDeportes :nombredeporte="deporte" v-on:metodoPadre="metodoPadre"/>
        </li>
    </ul>
    <h2 style="background-color:pink" v-html="favorito"></h2>
  </div>
</template>

<script>
import HijoDeportes from "./HijoDeportes.vue";

export default {
  name: "PadreDeportes",
  components: {
    HijoDeportes,
  },
  methods:{
    metodoPadre(deporte, nombre){
        this.favorito="Deporte favorito de " + nombre + " = " + deporte;
    }
  },
  data(){
    return{
    deportes: ["Baile Deportivo", "Volleyball", "Natacion", "Gimnasia Ritmica"],
    favorito: ""
    }
  }
};
</script>
