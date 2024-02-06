<template>
  <div class="container mt-5 w-25 p-4 rounded-3" style="background-color: gray">
    <h1 class="text-white text-center mb-4">LOGIN</h1>
    <form @submit.prevent="login" class="mx-auto" style="max-width: 300px;">
      <div class="mb-3">
        <label for="cajauser" class="form-label text-white">Usuario:</label>
        <input v-model="usuario" type="text" class="form-control" id="cajauser" name="cajauser" required>
      </div>
      <div class="mb-3">
        <label for="cajapassword" class="form-label text-white">Contraseña:</label>
        <input v-model="password" type="password" class="form-control" id="cajapassword" name="cajapassword" required>
      </div>
      <button type="submit" class="btn btn-primary btn-block">INICIAR SESION</button>
    </form>

    <div class="mt-3 text-center">
      <!-- Mostrar mensaje de éxito o error -->
      <h4 v-if="loginCorrecto" class="text-success">¡Acceso Autorizado!</h4>
      <h4 v-if="loginIncorrecto" class="text-danger">Usuario o Contraseña incorrectos</h4>
    </div>
  </div>
</template>

<script>
import ServiceTienda from '../services/ServicesTienda';
 const service = new ServiceTienda();
import Global from './../Global';

/* eslint-disable */
export default {
  name: "Login",
  data() {
    return {
      usuario: "",
      password: "",
      loginCorrecto: false, 
      loginIncorrecto: false, 
    };
  },
  methods: {
    login() {
      // Llama a autorizarAcceso y maneja la promesa
      service.autorizarAcceso(this.usuario, this.password)
        .then(() => {
          console.log("Usuario:", this.usuario);
          console.log("Password:", this.password);
          console.log("TOKEN: " + Global.token);

          // Cambia el estado para mostrar el mensaje de éxito
          this.loginCorrecto = true;
          this.loginIncorrecto = false;
        })
        .catch(error => {
          console.error("Error al autorizar acceso:", error);

          // Cambia el estado para mostrar el mensaje de error
          this.loginCorrecto = false;
          this.loginIncorrecto = true;
        });
    },
  },
};
</script>

<style>
.input-narrow {
  max-width: 500px; 
}
</style>