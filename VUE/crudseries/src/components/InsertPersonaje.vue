<template>
  <div class="mx-auto w-50">
    <h1>INSERTAR PERSONAJE</h1>
    <form v-on:submit.prevent="insertPersonaje()">
      <label>Nombre:</label>
      <input type="text" class="form-control" v-model="personaje.nombre" />
      <label>Imagen:</label>
      <input type="text" class="form-control" v-model="personaje.imagen" />
      <label>Serie:</label>
      <select class="form-control" v-model="personaje.idSerie">
        <option value="">Select a Serie</option>
        <option
          v-for="serie in series"
          :key="serie.idSerie"
          :value="serie.idSerie"
        >
          {{ serie.nombre }}
        </option>
      </select>
      <br />
      <button class="btn btn-info">INSERTAR</button>
    </form>
  </div>
</template>

<script>
import ServiceSeries from "../services/ServiceSeries";

const service = new ServiceSeries();

export default {
  name: "InsertPersonaje",
  data() {
    return {
      personaje: {
        idPersonaje: 0,
        nombre: "",
        imagen: "",
        idSerie: 0,
      },
      series: [],
    };
  },
  mounted() {
    service.getSeries().then((result) => {
      this.series = result;
    });
  },
  methods: {
    insertPersonaje() {
        service.insertPersonaje(this.personaje).then((result)=>{
            console.log(result);
            console.log(this.personaje)
            this.$router.push("/personajes/" + this.personaje.idSerie)
        })
    },
  },
};
</script>

<style>
</style>