<template>
  <div class="container">
    <h1>Tabla de Multiplicar</h1>
    <label>Introduce un número:</label>
    <input type="number" v-model="numero" />
    <!-- GENERAR TABLA CON BOTON -->
    <button @click="generarTablaHTML">Generar tabla</button>
    <div v-if="tablahtml.length > 0" v-html="tablahtml" />
    <hr />
    <!-- GENERAR TABLA CON DIRECTIVOS -->
    <div class="table-container" v-if="numero > 0">
      <table>
        <thead>
          <tr>
            <th>Operacion</th>
            <th>Resultado</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 10" :key="i">
            <td>{{ numero }} * {{ i }}</td>
            <td>{{ numero * i }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- GENERAR TABLA CON FILTERS -->
    <hr />
    <div v-if="numero > 0" v-html="$filters.generarTabla(numero)" />
  </div>
</template>

<script>
export default {
  name: "TablaMultiplicar",
  data() {
    return {
      numero: -1,
      tablahtml: "",
    };
  },
  methods: {
    generarTablaHTML() {
      this.tablahtml = "";
      this.tablahtml += "<table class='border'><tbody>";
      for (let i = 1; i <= 10; i++) {
        this.tablahtml += "<tr>";
        this.tablahtml += "<td>" + this.numero + " * " + i + "</td>";
        this.tablahtml += "<td>" + this.numero * i + "</td>";
        this.tablahtml += "</tr>";
      }

      this.tablahtml += "</tbody></table>";
    },
  },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.table-container {
  margin-top: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

.border{
  border: 1px solid #000;
  padding: 5px;
}

th {
  background-color: #f2f2f2;
}
</style>
