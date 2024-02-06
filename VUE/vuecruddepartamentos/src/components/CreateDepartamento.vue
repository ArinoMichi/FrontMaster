<template>
  <div class="mx-auto w-50">
    <h1 style="color:blue">{{mensaje}}</h1>
    <h1>Create Departamento</h1>
    <form v-on:submit.prevent="insertarDept()" >
        <label>Id Departamento:</label>
        <input type="number" class="form-control" v-model="departamento.idDepartamento"/>
        <label>Nombre:</label>
        <input type="text" class="form-control" v-model="departamento.nombre"/>
        <label>Localidad:</label>
        <input type="text" class="form-control" v-model="departamento.localidad"/>
        <br/>
        <button class="btn btn-info">INSERTAR</button>
    </form>
  </div>
</template>

<script>
import ServiceDepartamentos from '../services/ServiceDepartamentos'

const service = new ServiceDepartamentos();

export default {
    name:"CreateDepartamento",
    data(){
        return{
            departamento: {
                idDepartamento: 0,
                nombre: "",
                localidad: ""
            }
        }
    },
    methods:{
        insertarDept(){
            service.insertDepartamento(this.departamento).then(result=>{
                console.log(result);
                this.$router.push("/");
            })
        }
    }
}
</script>
