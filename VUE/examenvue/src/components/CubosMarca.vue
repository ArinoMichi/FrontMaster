<template>
 <div>
    <h1>CUBOS MARCA: {{marca}}</h1>
    <div class="d-flex flex-wrap justify-content-around">
      <div class="card m-2" style="width: 30rem;"  v-for="cubo in cubos" :key="cubo" >
        <div class="text-center"> <!-- Add this div for centering the image -->
          <img :src="cubo.imagen" class="card-img-top" alt="coche" style="height:250px;width: 250px" />
        </div>
        <div class="card-body">
          <h4 class="card-title text-info">{{ cubo.nombre }}</h4>
          <h4 class="card-title text-info">{{cubo.precio}} €</h4>
           <router-link :to="'/comentarioscubo/' + cubo.idCubo" class="btn btn-success">COMENTARIOS</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceTienda from '../services/ServicesTienda';
const service = new ServiceTienda();

export default {
    name: "CubosMarca",
     data() {
    return {
      cubos: [],
      marca : ""
    };
  },
  mounted() {
    this.loadCubos();
  },
  methods: {
    loadCubos() {
      this.marca = this.$route.params.marca;
      service.getCubosMarca(this.marca).then((result)=>{
        this.cubos=result;
      })
    },
  },

    watch: {
    "$route.params.marca"(nextVal, oldVal) {
      if (nextVal != oldVal) {
        this.loadCubos();
      }
    },
  },
}
</script>

<style>

</style>