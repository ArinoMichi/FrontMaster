<template>
  <div class="mx-auto w-50">
    <h1>Update Departamento</h1>
    <form v-if="departamento" v-on:submit.prevent="actualizarDept()">
        <input type="hidden" class="form-control" v-model="departamento.idDepartamento"/>
        <label>Nombre:</label>
        <input type="text" class="form-control" v-model="departamento.nombre"/>
        <label>Localidad:</label>
        <input type="text" class="form-control" v-model="departamento.localidad"/>
        <br/>
        <button class="btn btn-info">ACTUALIZAR</button>
    </form>
  </div>
</template>

<script>
import ServiceDepartamentos from '../services/ServiceDepartamentos'

const service = new ServiceDepartamentos();

export default {
    name: "UpdateDepartamento",
    data(){
        return{
            departamento: null
        }
    },
    mounted(){
        var ide = this.$route.params.id
        service.findDepartamento(ide).then(result=>{
            this.departamento=result;
        })
    },
    methods:{
        actualizarDept(){
            service.updateDepartamento(this.departamento).then(result=>{
                console.log(result);
                this.$router.push("/");
            })
        }
    }
}
</script>

<style>

</style>