<template>
  <div class="mx-auto w-50 d-flex justify-content-center">
    <div class="card" style="width: 30rem">
      <img :src="serie.imagen" class="card-img-top" alt="coche" />
      <div class="card-body">
        <h5 class="card-title">{{ serie.nombre }}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: {{ serie.idSerie }}</li>
        <li class="list-group-item">Puntuacion: {{ serie.puntuacion }}</li>
      </ul>
      <div class="card-body">
        <router-link :to="'/personajes/' + serie.idSerie" class="btn btn-info">PERSONAJES</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceSeries from "../services/ServiceSeries";

const service = new ServiceSeries();

export default {
  name: "DetallesSerie",
  data() {
    return {
      serie: {},
    };
  },
  mounted() {
    this.loadSerie();
  },
  methods: {
    loadSerie() {
      var id = this.$route.params.id;
      service.getSerieId(id).then((result) => {
        this.serie = result;
      });
    },
  },
  watch: {
    "$route.params.id"(nextVal, oldVal) {
      if (nextVal != oldVal) {
        this.loadSerie();
      }
    },
  },
};
</script>

<style>
</style>