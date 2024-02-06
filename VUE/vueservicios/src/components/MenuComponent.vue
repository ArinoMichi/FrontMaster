<template>
  <div style="margin-left: 30px">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <img src="../assets/logo.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
        DEPARTAMENTOS
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">HOME</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/empleados"
              >EMPLEADOS</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/coches">COCHES</router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              OFICIO
            </a>
            <ul class="dropdown-menu">
              <li v-for="oficio in oficios" :key="oficio">
                <router-link
                  :to="'/empleadosoficios/' + oficio"
                  class="dropdown-item"
                >
                  {{ oficio }}
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import ServiceEmpleados from '../services/ServiceEmpleados';

const service = new ServiceEmpleados();
export default {
  name: "MenuComponent",
  data() {
    return {
      oficios: [],
    };
  },
  mounted() {
      service.getOficios().then(result=>{
        this.oficios=result
      })
  },
};
</script>
