<template>
  <div class="mx-auto w-50">
    <h1>InsertCoche</h1>
    <form v-on:submit.prevent="insertarCoche()">
      <label>Id Coche:</label>
      <input type="number" class="form-control" v-model="coche.idCoche" />
      <label>Marca:</label>
      <input type="text" class="form-control" v-model="coche.marca" />
      <label>Modelo:</label>
      <input type="text" class="form-control" v-model="coche.modelo" />
      <label>Conductor:</label>
      <input type="text" class="form-control" v-model="coche.conductor" />
      <label>Imagen:</label>
      <input type="text" class="form-control" v-model="coche.imagen" />
      <br />
      <button class="btn btn-info">INSERTAR</button>
    </form>
  </div>
</template>

<script>
import ServiceCoches from "../services/ServiceCoches";

const service = new ServiceCoches();

export default {
  name: "InsertCoche",
  data() {
    return {
      coche: {
        idCoche: 0,
        marca: "",
        modelo: "",
        conductor: "",
        imagen: "",
      },
    };
  },
  methods: {
    insertarCoche() {
      service.insertCoche(this.coche).then((result) => {
        console.log(result);
        this.$router.push("/");
      });
    },
  },
};
</script>

<style>
</style>