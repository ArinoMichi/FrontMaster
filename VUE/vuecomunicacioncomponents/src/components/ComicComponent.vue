<template>
  <div>
    <h1>{{ comic.titulo }}</h1>
    <p>{{ comic.descripcion }}</p>
    <img :src="comic.imagen" />
    <h3 :class="{
      rojo: comic.year<=2000,
      verde: comic.year >2000
    }">Año: {{ comic.year }}</h3>
    <div style="display:flex">
    <button @click="borrarComic()">Borrar</button>
    <button @click="seleccionarFavorito()">Favorito</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComicComponent",
  props: ["comic", "index"],
  methods:{
    seleccionarFavorito(){
      this.$emit("seleccionarFavorito", this.comic)
    },
    borrarComic(){
      this.$emit("borrarComic", this.index)
    }
  }
};
</script>

<style>
@import "../assets/css/estilocomics.css";
</style>
