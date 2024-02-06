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
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/insert"
                >Nuevo Personaje</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/modificar"
                >Modificar Personaje</router-link
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
                Series
              </a>
              <ul class="dropdown-menu">
                <li v-for="serie in series" :key="serie">
                <router-link
                  :to="'/detallesserie/' + serie.idSerie"
                  class="dropdown-item"
                >
                  {{ serie.nombre }}
                </router-link>
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
import ServiceSeries from '../services/ServiceSeries';

const service = new ServiceSeries();

export default {
    name: "MenuSeries",
    data(){
        return{
            series:[]
        }
    },
    mounted(){
        service.getSeries().then((result)=>{
            this.series=result;
        })
    }
};
</script>

<style>
</style>