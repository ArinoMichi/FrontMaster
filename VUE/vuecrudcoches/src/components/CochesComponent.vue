<template>
  <div class="mx-auto w-50">
    <h1>Coches Component</h1>
    <table v-if="status == true" class="table table bordered">
      <thead>
        <tr>
          <th>MODELO</th>
          <th>IMAGEN</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="coche in coches" :key="coche">
          <td>{{ coche.modelo }}</td>
          <td>
            <img :src="coche.imagen" style="height: 200px; width: 200px" />
          </td>
          <td>
            <router-link
              :to="'/detalles/' + coche.idCoche"
              class="btn btn-warning"
            >
              DETALLES</router-link
            >
            <router-link :to="'/edit/' + coche.idCoche" class="btn btn-info">
              EDITAR</router-link
            >

            <button class="btn btn-danger" @click="deleteCoche(coche.idCoche)">
              BORRAR
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ServiceCoches from "../services/ServiceCoches";

const service = new ServiceCoches();

export default {
  name: "CochesComponent",
  data() {
    return {
      coches: [],
      status: false,
    };
  },
  mounted() {
    this.cargarCoches();
  },
  methods: {
    deleteCoche(cocheId) {
      service.deleteCoche(cocheId).then((result) => {
        console.log(result);
        this.cargarCoches();
      });
    },
    cargarCoches() {
      service.getCoches().then((result) => {
        this.coches = result;
        this.status = true;
      });
    },
  },
};
</script>
