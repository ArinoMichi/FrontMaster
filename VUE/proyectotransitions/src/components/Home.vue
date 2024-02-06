<template>
  <div style="text-align: center">
    <br />
    <Transition name="slide-fade" mode="out-in">
      <h1 v-if="fade" class="main-heading">WELCOME TO VUE ANIMATIONS!!</h1>
    </Transition>
    <br />
    <Transition :duration="550" name="nested">
      <div v-if="show" class="outer">
        <div class="inner">
          <div
            id="carouselExampleInterval"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="2000">
                <img
                  src="../assets/images/img1.webp"
                  class="d-block w-100 rounded"
                  alt="..."
                  style="max-height: 450px;"
                />
              </div>
              <div class="carousel-item" data-bs-interval="1000">
                <img
                  src="../assets/images/img2.webp"
                  class="d-block w-100 rounded"
                  alt="..."
                  style="max-height: 450px;"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="../assets/images/img3.png"
                  class="d-block w-100 rounded"
                  alt="..."
                  style="max-height: 450px;"
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </Transition>
    <br />
    <button @click="toggleShow" class="btn btn-success">TOGGLE</button>
  </div>
</template>

<script>
export default {
  name: "HomeVue",
  data() {
    return {
      show: false,
      fade: false,
    };
  },
  mounted() {
    this.fade = true;
    this.show = true;
  },
  methods: {
    toggleShow() {
      this.show = !this.show;
      this.fade = !this.fade;
    },
  },
};
</script>

<style>
/* Transición para slide-fade */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 1s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

/* Contenedor principal*/
.outer {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%; 
  height: 70%; 
  background: beige;
  padding: 30px;
  box-sizing: border-box;
  margin: 0 auto; /* Centra horizontalmente */
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
}

/* Contenido interior */
.inner {
  width: 100%;
  background: #f8f9fa;
  padding: 30px;
  min-height: 200px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Transiciones anidadas */
.nested-enter-active,
.nested-leave-active {
  transition: all 0.3s ease-in-out;
}
/* Retardo al salir del elemento principal */
.nested-leave-active {
  transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
  transform: translateY(30px);
  opacity: 0;
}

/* También podemos aplicar transiciones a elementos anidados usando selectores anidados */
.nested-enter-active .inner,
.nested-leave-active .inner {
  transition: all 0.3s ease-in-out;
}
/* Retardo al entrar al elemento anidado */
.nested-enter-active .inner {
  transition-delay: 0.25s;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(30px);
  /*
  Solución temporal para un error en Chrome 96 al manejar transiciones anidadas de opacidad.
    Esto no es necesario en otros navegadores o en Chrome 99+, donde se ha corregido el error.
  */
  opacity: 0.001;
}
</style>
