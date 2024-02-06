<template>
  <div>
    <h1>Propiedades Conmutadas</h1>
    <ul>
      <li v-for="game in juegosRojos" :key="game" v-html="game"></li>
    </ul>
    <button @click="getJuegosAzules()">
        Juegos Azules
    </button>
    <div v-html="html" ></div>
  </div>
</template>

<script>
export default {
  name: "PropiedadConmutada",
  computed: {
    //UNA PROPIEDAD CONMUTADA SIEMPRE DEVUELVE VALORES
    //Y NO PUEDE RECIBIR PARAMETROS
    juegosRojos() {
      var datos = this.juegos;
      //RECORREMOS CADA JUEGO Y LO DEVOLVEMOS EN COLOR ROJO
      for (var i = 0; i < datos.length; i++) {
        var juego = datos[i];
        juego = "<span style='color:red'>" + juego + "</span>";
        datos[i] = juego;
      }
      return datos;
    },
  },
  methods:{
    getJuegosAzules(){
        this.html="";
        for ( var juego of this.juegos){
            this.html += "<h1 style='color:blue'>"+juego+"</h1>"
        }
    }
  },
  data() {
    return {
      html: "",
      juegos: [
        "Parchis",
        "Luz roja, Luz verde",
        "Canicas",
        "La galleta",
        "La cuerda",
      ],
    };
  },
};
</script>

<style>
</style>