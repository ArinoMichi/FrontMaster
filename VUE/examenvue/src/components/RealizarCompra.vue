<template>
  <div>
    <h1>REALIZAR COMPRA</h1>

    <div v-for="cubo in cubos" :key="cubo">
      <div class="card mb-3">
        <img :src="cubo.imagen" class="card-img-top" alt="Cubo Imagen" />
        <div class="card-body">
          <h5 class="card-title">{{ cubo.nombre }}</h5>
          <p class="card-text">{{ cubo.descripcion }}</p>
          <p class="card-text"><strong>Precio:</strong> {{ cubo.precio }} €</p>
          <button @click="comprarCubo(cubo.idCubo)" class="btn btn-primary">
            Comprar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceTienda from "../services/ServicesTienda";
const service = new ServiceTienda();

export default {
  name: "RealizarCompra",
  data() {
    return {
      cubos: [],
    };
  },
  mounted() {
    this.getCubos();
  },
  methods: {
    getCubos() {
      service.getCubos().then((result) => {
        this.cubos = result;
      });
    },
    comprarCubo(idCubo) {
      console.log(idCubo);
      service.hacerCompra(idCubo).then((result) => {
        console.log("Compra realizada: ", result.data);
        // Redirige a la página de compras después de realizar la compra
        this.$router.push('/comprasusuario');
      });
    },
  },
};
</script>

<style scoped>
.card {
  max-width: 400px;
  margin: 0 auto;
}
</style>
