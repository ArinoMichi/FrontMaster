<template>
  <div>
    <h1>HOME</h1>
    <h2>{{mensaje}}</h2>
  </div>
</template>

<script>
import ServiceEjemplo from '../services/ServiceEjemplo';
//PARA UTILIZAR UN SERVICIO, DEBEMOS CREAR UNA CONSTANTE
//QUE SEA UN OBJETO DE LA CLASE SERVICE

const service = new ServiceEjemplo();

export default {
    name:"HomeComponent",
    data(){
      return{
        mensaje: ""
      }
    },
    mounted(){
      this.mensaje = service.getSaludo("Alva");
    }
}
</script>

<style>

</style>