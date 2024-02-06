<template>
  <div class="mx-auto w-50">
    <h1>PERSONAJES Y SERIES</h1>
    <form v-on:submit.prevent="updatePersonaje()">
      <label>Seleccione una serie:</label>
      <select class="form-control" v-model="idSerie">
        <option value="">Select Serie</option>
        <option
          v-for="serie in series"
          :key="serie.idSerie"
          :value="serie.idSerie"
        >
          {{ serie.nombre }}
        </option>
      </select>
      <br />
      <label>Seleccione un personaje:</label>
      <select class="form-control" v-model="idPersonaje">
        <option value="">Select Personaje</option>
        <option
          v-for="personaje in personajes"
          :key="personaje"
          :value="personaje.idPersonaje"
        >
          {{ personaje.nombre }}
        </option>
      </select>
      <button class="btn btn-info">ACTUALIZAR</button>
    </form>
    <div v-if="idPersonaje && idSerie">
      <h2>Personaje seleccionado:</h2>
      <img
        style="height: 300px; width: 300px"
        :src="personajes.find((p) => p.idPersonaje === idPersonaje).imagen"
        alt="Personaje"
      />
      <h2>Serie seleccionada:</h2>
      <img
        style="height: 300px; width: 300px"
        :src="series.find((s) => s.idSerie === idSerie).imagen"
        alt="Serie"
      />
    </div>
  </div>
</template>

<script>
import ServiceSeries from "../services/ServiceSeries";

const service = new ServiceSeries();

export default {
  name: "UpdatePersonaje",
  data() {
    return {
      series: [],
      personajes: [],
      idPersonaje: 0,
      idSerie: 0,
    };
  },
  mounted() {
    service.getSeries().then((result) => {
      this.series = result;
    });
    service.getPersonajes().then((result) => {
      this.personajes = result;
    });
  },

  methods: {
    updatePersonaje() {
      service
        .putPersonajeSerie(this.idPersonaje, this.idSerie)
        .then((result) => {
          console.log(result);
          this.$router.push("/personajes/" + this.idSerie);
        });
    },
  },
};
</script>

<style>
</style>