<template>
  <div>
    <h1 class="text-info">Mi perfil</h1>
    <hr/>
    <div v-if="usuario != null">
    <h2 >USUARIO: {{ usuario.nombre }}</h2>
    <h2> EMAIL: {{usuario.email}}</h2>
    <router-link to="/comprasusuario" class="btn btn-info">VER COMPRAS</router-link>
    </div>
    <h1 v-else class="text-danger">SE TIENE QUE REGISTRAR PARA PODER ACCEDER!!!</h1>
  </div>
</template>

<script>
import ServiceTienda from '../services/ServicesTienda'
const service = new ServiceTienda();

export default {
  name: "UserInfo",
  data() {
    return {
      usuario: null
    };
  },
  mounted() {
    this.mostrarDatos();
  },
  methods: {
    mostrarDatos() {
      service.verperfil()
        .then(result => {
          this.usuario = result;
        })
        .catch(error => {
          console.error("Error al obtener perfil:", error);
          this.usuario = null; // Establecer usuario en null en caso de error
        });
    }
  }
};
</script>

<style>
</style>
