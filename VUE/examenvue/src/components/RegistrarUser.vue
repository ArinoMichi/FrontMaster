<template>
  <div class="container mt-5 w-25 p-4 rounded-3" style="background-color: gray">
    <h1 class="text-white text-center mb-4">REGISTRO</h1>
    <form @submit.prevent="registro" class="mx-auto" style="max-width: 300px">
      <div class="mb-3">
        <label for="cajanombre" class="form-label text-white">Nombre:</label>
        <input
          v-model="nombre"
          type="text"
          class="form-control"
          id="cajanombre"
          name="cajanombre"
          required
        />
      </div>
      <div class="mb-3">
        <label for="cajaemail" class="form-label text-white">Email:</label>
        <input
          v-model="email"
          type="email"
          class="form-control"
          id="cajaemail"
          name="cajaemail"
          required
        />
      </div>
      <div class="mb-3">
        <label for="cajapassword" class="form-label text-white"
          >Contraseña:</label
        >
        <input
          v-model="nuevaPassword"
          type="password"
          class="form-control"
          id="cajapassword"
          name="cajapassword"
          required
        />
      </div>
      <div class="mb-3">
        <label for="cajarepetirpassword" class="form-label text-white"
          >Repetir Contraseña:</label
        >
        <input
          v-model="repetirPassword"
          type="password"
          class="form-control"
          id="cajarepetirpassword"
          name="cajarepetirpassword"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary btn-block">REGISTRAR</button>
    </form>

    <div class="mt-3 text-center">
      <!-- Mostrar mensaje de éxito o error -->
      <h4 v-if="registroCorrecto" class="text-success">
        Registro exitoso. ¡Inicia sesión!
      </h4>
      <h4 v-if="registroIncorrecto" class="text-danger">
        Error en el registro. Intenta nuevamente.
      </h4>
    </div>
  </div>
</template>

<script>
import ServiceTienda from "../services/ServicesTienda";
const service = new ServiceTienda();

/* eslint-disable */
export default {
  name: "Registro",
  data() {
    return {
      nombre: "",
      email: "",
      nuevaPassword: "",
      repetirPassword: "",
      registroCorrecto: false,
      registroIncorrecto: false,
    };
  },
  methods: {
    registro() {
      // Verifica que las contraseñas coincidan antes de registrar
      if (this.nuevaPassword !== this.repetirPassword) {
        console.error("Las contraseñas no coinciden.");
        this.registroCorrecto = false;
        this.registroIncorrecto = true;
        return;
      }

      var json = {
        idUsuario: 0,
        nombre: this.nombre,
        email: this.email,
        pass: this.nuevaPassword,
      };

      // Llama a la función de registro y maneja la promesa
      service
        .crearUsuario(json)
        .then(() => {
          console.log("Nombre:", this.nombre);
          console.log("Email:", this.email);
          console.log("Nueva Contraseña:", this.nuevaPassword);

          // Cambia el estado para mostrar el mensaje de éxito
          this.registroCorrecto = true;
          this.registroIncorrecto = false;
        })
        .catch((error) => {
          console.error("Error en el registro:", error);

          // Cambia el estado para mostrar el mensaje de error
          this.registroCorrecto = false;
          this.registroIncorrecto = true;
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
