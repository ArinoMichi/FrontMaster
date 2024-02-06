<template>
  <div class="mx-auto w-50">
    <h1>Crud Departamentos</h1>
    <img v-if="status==false" src="../assets/images/loading.gif"/>
    <table v-if="status ==true" class="table table bordered">
        <thead>
            <tr>
                <th>Id Departamento</th>
                <th>Nombre</th>
                <th>Localidad</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="dept in departamentos" :key="dept">
                <td>{{dept.idDepartamento}}</td>
                <td>{{dept.nombre}}</td>
                <td>{{dept.localidad}}</td>
                <td>
                    <router-link class="btn btn-warning" :to="'/detalles/' + dept.idDepartamento + '/' +dept.nombre + '/' + dept.localidad">DETAILS</router-link>
                    <router-link class="btn btn-info" :to="'/update/' + dept.idDepartamento">EDIT</router-link>
                    <router-link class="btn btn-danger" :to="'/delete/' + dept.idDepartamento">DELETE</router-link>
                </td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import ServiceDepartamentos from './../services/ServiceDepartamentos';

const service = new ServiceDepartamentos();

export default {
    name:"DepartamentosComponent",
    data(){
        return{
            departamentos:[],
            status: false
        }
    },
    mounted(){
        service.getDepartamentos().then(result=>{
            this.departamentos=result;
            this.status=true;
        })
    }
}
</script>

<style>

</style>