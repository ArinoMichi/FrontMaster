<template>
  <div class="mx-auto w-50">
    <h1>EDIT COCHE {{$route.params.id}}</h1>
    <form v-on:submit.prevent="updateCoche()">
      <input type="hidden" class="form-control" v-model="coche.idCoche" />
      <label>Marca:</label>
      <input type="text" class="form-control" v-model="coche.marca" />
      <label>Modelo:</label>
      <input type="text" class="form-control" v-model="coche.modelo" />
      <label>Conductor:</label>
      <input type="text" class="form-control" v-model="coche.conductor" />
      <label>Imagen:</label>
      <input type="text" class="form-control" v-model="coche.imagen" />
      <br />
      <button class="btn btn-info">ACTUALIZAR</button>
    </form>
  </div>
</template>

<script>
import ServiceCoches from '../services/ServiceCoches'

const service = new ServiceCoches();

export default {
    name: "EditCoches",
    data(){
      return{
        coche:{}
      }
    },
    mounted(){
      var id = this.$route.params.id;
      service.getCocheId(id).then((result)=>{
        this.coche=result;
      })
    },
    methods:{
      updateCoche(){
        service.updateCoche(this.coche).then((result)=>{
          console.log(result);
          this.$router.push("/")
        })
      }
    }
}
</script>

<style>

</style>