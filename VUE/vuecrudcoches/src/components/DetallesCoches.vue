<template>
  <div class="mx-auto w-50  d-flex justify-content-center">
    <div class="card" style="width: 30rem">
      <img :src="coche.imagen" class="card-img-top" alt="coche" />
      <div class="card-body">
        <h5 class="card-title">{{coche.modelo}}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: {{coche.idCoche}}</li>
        <li class="list-group-item"> Marca: {{coche.marca}}</li>
        <li class="list-group-item">Conductor: {{coche.conductor}}</li>
        
      </ul>
      <div class="card-body">
        <router-link to="/" class="btn btn-info">VOLVER</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceCoches from "../services/ServiceCoches";

const service = new ServiceCoches();

export default {
  name: "DetallesCoches",
  data() {
    return {
      coche: {},
    };
  },
  mounted() {
    var id = this.$route.params.id;
    service.getCocheId(id).then((result) => {
      this.coche = result;
    });
  },
};
</script>

<style>
</style>