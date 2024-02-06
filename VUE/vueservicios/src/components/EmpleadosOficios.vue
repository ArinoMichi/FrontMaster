<template>
  <div>
    <h1>EmpleadosOficio</h1>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Apellido</th>
          <th>Oficio</th>
          <th>Salario</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="emp in empleados" :key="emp">
            <td> {{emp.apellido}}</td>
            <td> {{emp.oficio}}</td>
            <td> {{emp.salario}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ServiceEmpleados from '../services/ServiceEmpleados';
const service = new ServiceEmpleados();

export default {
  name: "EmpleadosOficios",
  data() {
    return {
      empleados: [],
    };
  },
  methods:{
    loadEmpleados(){
        var oficio = this.$route.params.oficio;
        service.getEmpleadosOficios(oficio).then(result=>{
            this.empleados=result
        })
    }
  },
  mounted(){
    this.loadEmpleados()
  },
  watch:{
    '$route.params.oficio'(nextVal,oldVal){
        if (nextVal !=oldVal) {
            this.loadEmpleados();
        }
    }
  }
};
</script>

<style>
</style>