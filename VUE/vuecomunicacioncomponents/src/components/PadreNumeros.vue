<template>
  <div>
    <h2 style="color:red">La suma es: {{ suma }}</h2>
    <button @click="aniadirNumero()">Nuevo Numero</button>
    <div v-for="num in numeros" :key="num">
      <HijoNumeros :numero="num" v-on:sumarPadre="sumarNumero"/>
    </div>
  </div>
</template>

<script>
import HijoNumeros from "./HijoNumeros.vue";
export default {
  components: { HijoNumeros },
  name: "PadreNumeros",
  methods: {
    aniadirNumero() {
      var numeroAleatorio = parseInt(Math.random() * 100 + 1);
      this.numeros.push(numeroAleatorio);
    },
    sumarNumero(num){
        this.suma+=num;
    }
  },
  data() {
    return {
      numeros: [19, 27],
      suma: 0,
    };
  },
};
</script>
