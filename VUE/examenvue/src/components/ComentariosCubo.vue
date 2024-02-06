<template>
  <div>
    <h1 class="text-center">Comentarios cubo: {{ idCubo }}</h1>
    <hr/>
    <div class="mx-auto w-50">
      <div v-for="comentario in comentarios" :key="comentario" class="mb-4">
        <div class="row">
          <!-- Columna para idUsuario y fechaComentario -->
          <div class="col-md-2 text-info">
            <div class="text-center">
              <h3>User: {{ comentario.idUsuario }}</h3>
              <h5>{{ comentario.fechaComentario }}</h5>
            </div>
          </div>
          <!-- Columna para el comentario -->
          <div class="col-md-10">
            <div>
              <h4>{{ comentario.comentario }}</h4>
            </div>
          </div>
        </div>
        <hr /> <!-- Añadir una línea horizontal para separar los comentarios -->
      </div>
    </div>
  </div>
</template>



<script>
import ServiceTienda from "../services/ServicesTienda";
const service = new ServiceTienda();
export default {
  name: "ComentariosCubo",
  data() {
    return {
      idCubo: "",
      comentarios: [],
    };
  },
  mounted() {
    this.idCubo = this.$route.params.id;
    service.getComentariosCubo(this.idCubo).then((result) => {
      this.comentarios = result;
    });
  },
};
</script>

<style>
</style>