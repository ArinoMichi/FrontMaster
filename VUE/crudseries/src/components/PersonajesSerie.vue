<template>
  <div class="mx-auto w-50">
    <router-link
      :to="'/detallesserie/' + $route.params.id"
      class="btn btn-danger"
      >VOLVER</router-link
    >
    <h1>Personajes serie: {{ $route.params.id }}</h1>
    <table class="table table bordered">
      <thead>
        <tr>
          <th>NOMBRE</th>
          <th>IMAGEN</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="personaje in personajes" :key="personaje">
          <td>{{ personaje.nombre }}</td>
          <td>
            <img :src="personaje.imagen" style="height: 200px; width: 200px" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ServiceSeries from "../services/ServiceSeries";

const service = new ServiceSeries();

export default {
  name: "PersonajesSerie",
  data() {
    return {
      personajes: [],
    };
  },
  mounted() {
    this.loadPersonajes();
  },
  methods: {
    loadPersonajes() {
      var idSerie = this.$route.params.id;
      service.getPersonajesSerie(idSerie).then((result) => {
        this.personajes = result;
      });
    },
  },
   watch: {
    "$route.params.id"(nextVal, oldVal) {
      if (nextVal != oldVal) {
        this.loadPersonajes();
      }
    },
  },
};
</script>

<style>
</style>