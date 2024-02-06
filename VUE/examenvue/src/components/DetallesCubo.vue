<template>
  <div>
    <h1>DETALLES CUBO</h1>
    <div class="d-flex flex-wrap justify-content-around">
      <div class="card m-2" style="width: 30rem">
        <div class="text-center">
          <!-- Add this div for centering the image -->
          <img
            :src="cubo.imagen"
            class="card-img-top"
            alt="coche"
            style="height: 250px; width: 250px"
          />
        </div>
        <div class="card-body">
          <h4 class="card-title text-info">{{ cubo.nombre }}</h4>
          <h5 class="card-title text-info">Marca: {{ cubo.marca }}</h5>

         

          <!-- Mostrar la lista de comentarios -->
          <div v-if="comentarios.length > 0">
            <h4 class="mt-3">Comentarios:</h4>
            <ul>
              <li v-for="comentario in comentarios" :key="comentario.idComentario">
                {{ comentario.comentario }}
              </li>
            </ul>
          </div>
          <div v-else>
            <p>No hay comentarios disponibles.</p>
          </div>
          <router-link :to="'/'" class="btn btn-warning">VOLVER</router-link>
        </div>
      </div>
       
    </div>
  </div>
</template>

<script>
import ServiceTienda from "../services/ServicesTienda";
const service = new ServiceTienda();

export default {
  name: "DetallesCubo",
  data() {
    return {
      cubo: {},
      comentarios: [], // Agrega una propiedad para almacenar los comentarios
      id: 0,
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    service.getCubosID(this.id).then((result) => {
      this.cubo = result;
    });

    // Llama al método para obtener los comentarios
    service.getComentariosCubo(this.id).then((comentarios) => {
      this.comentarios = comentarios;
    });
  },
};
</script>

<style>
</style>
