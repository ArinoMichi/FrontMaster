<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light" style="margin-left: 20px;">
      <div class="container-fluid">
        <router-link to="/">
          <img src="../assets/logo.png" alt="Logo" style="width: 25px; height: auto;">
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/" active-class="active-link">HOME</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/page1" active-class="active-link">TO DO</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/page2" active-class="active-link">ABOUT US</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "MenuTransitions",
};
</script>

<style scoped>
.navbar {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar-brand img {
  max-height: 40px; /* Ajusta la altura según sea necesario */
}

.navbar-nav .nav-link {
  color: #333;
  font-weight: bold;
  font-size: 20px; /* Ajusta el tamaño del texto según sea necesario */
}

/* Cambia el color cuando se selecciona (activo) */
.active-link {
  color: darkgreen !important;
}

</style>
