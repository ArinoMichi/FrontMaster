<template>
  <div style="text-align: center">
    <br />
    <h1>WELCOME TO VUE ANIMATIONS!!</h1>
    <br />
    <div>
      <div>
        <div
          id="carouselExampleInterval"
          class="carousel slide"
          data-bs-ride="carousel"
          style="max-width: 600px; margin: auto;"
        >
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="2000">
              <img
                src="../assets/images/img1.webp"
                class="d-block w-100 rounded"
                alt="..."
                style="max-height: 300px;"
              />
            </div>
            <div class="carousel-item" data-bs-interval="1000">
              <img
                src="../assets/images/img2.webp"
                class="d-block w-100 rounded"
                alt="..."
                style="max-height: 300px;"
              />
            </div>
            <div class="carousel-item">
              <img
                src="../assets/images/img3.png"
                class="d-block w-100 rounded"
                alt="..."
                style="max-height: 300px;"
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
    <br />
  </div>
</template>

<script>
export default {
  name: "HomeVue",
};
</script>
