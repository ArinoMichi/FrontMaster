<template>
  <div>
    <h1>Bienvendio a tu tienda de cubos!!!</h1>
     <table class="table table bordered">
      <thead>
        <tr>
          <th>NOMBRE</th>
          <th>MODELO</th>
          <th>PRECIO</th>
          <th>IMAGEN</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="cubo in cubos" :key="cubo">
          <td>{{ cubo.nombre }}</td>
          <td>{{cubo.modelo}}</td>
          <td>{{cubo.precio}}</td>
          <td>
            <img :src="cubo.imagen" style="height: 200px; width: 200px" />
          </td>
          <td><router-link :to="'/detallescubo/' + cubo.idCubo" class="btn btn-info">DETALLES</router-link></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
 import ServiceTienda from "../services/ServicesTienda"
 const service = new ServiceTienda();

export default {
  name: "HomeTienda",
  data() {
    return {
      cubos: [],
    };
  },
  mounted(){
    service.getCubos().then((result)=>{
      this.cubos=result;
    })
  }
};
</script>

<style>
</style>