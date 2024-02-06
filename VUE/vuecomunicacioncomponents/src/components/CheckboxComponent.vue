<template>
  <div>
    <div class="multiselect">
      <h1>Ejemplo checkbox</h1>
      <button @click="generarCheckbox">Generar checkbox</button>
      <div  style="display:flex,  flex-wrap: wrap;" v-for="(num, index) in numeros" :key="index">
        <input type="checkbox" v-model="seleccionados" :value="num" @change="actualizarSuma(num)" />
        <label>{{ num }}</label>
      </div>
      <h2 style="color: blue">{{ suma }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckboxComponent",
  data() {
    return {
      numeros: [],
      seleccionados: [],
      suma: 0
    };
  },
  methods: {
    generarCheckbox() {
      this.numeros = [];
      for (var i = 1; i < 10; i++) {
        var numero = parseInt(Math.random() * 100 + 1);
        this.numeros.push(numero);
      }
      this.seleccionados = [];
      this.actualizarSuma();
    },
    actualizarSuma(num) {
       if (typeof num === "number" && !isNaN(num)) {
        if (this.seleccionados.includes(num)) {
          this.suma += num; // Seleccionado, sumar
        } else {
          this.suma -= num; // Deseleccionado, restar
        }
      }
    }
  }
};
</script>

<style>
.multiselect {
  display: inline-block;
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
