<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/"
                >CUBOS</router-link
              >
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                MARCAS
              </a>
              <ul class="dropdown-menu">
                <li v-for="marca in marcas" :key="marca">
                  <router-link
                    :to="'/cubosmarca/' + marca"
                    class="dropdown-item"
                  >
                    {{ marca }}
                  </router-link>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                USER
              </a>
              <ul class="dropdown-menu">
                <li>
                  <router-link :to="'/login'" class="dropdown-item">
                    LOG IN
                  </router-link>
                </li>
                <li>
                  <router-link :to="'/registraruser'" class="dropdown-item">
                    REGISTRAR
                  </router-link>
                </li>
                <li>
                  <router-link :to="'/userinfo'" class="dropdown-item">
                    PERFIL
                  </router-link>
                </li>
                <li>
                  <router-link :to="'/comprar'" class="dropdown-item">
                    COMPRAR
                  </router-link>
                </li>
                <li></li>
                <li>
                  <!-- Agrega el evento click para llamar a la función logout -->
                  <a @click="logout" class="dropdown-item">LOG OUT</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import Global from '../Global';
import ServiceTienda from "../services/ServicesTienda";


const service = new ServiceTienda();

export default {
  name: "MenuTienda",
  data() {
    return {
      marcas: [],
    };
  },
  mounted() {
    service.getMarcas().then((result) => {
      this.marcas = result;
    });
  },
  methods:{
    logout() {
     Global.token="";
      alert('sesion cerrada!')
       this.$router.push('/');
    },
  }
};
</script>

<style></style>
