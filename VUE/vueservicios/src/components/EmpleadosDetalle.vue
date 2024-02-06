<template>
  <div>
    <h1>Empleados Component</h1>
    <form v-on:submit.prevent="buscarEmpleado()" class="mx-auto w-50">
      <label>Seleccione un empleado</label>
      <select v-model="idEmpleado" class="form-control">
        <option v-for="emp in empleados" :key="emp" :value="emp.idEmpleado">
          {{ emp.apellido }}
        </option>
      </select>
      <button class="btn btn-info">DETALLES</button>
    </form>
    <div v-if="empleado">
      <h2 style="color: blue">{{ empleado.apellido }}</h2>
      <dl>
        <dt>Oficio</dt>
        <dd>{{ empleado.oficio }}</dd>
        <dt>Salario:</dt>
        <dd>{{ empleado.salario }}</dd>
        <dt>Departamento:</dt>
        <dd>{{ empleado.departamento }}</dd>
      </dl>
    </div>
  </div>
</template>

<script>
import ServiceEmpleados from "../services/ServiceEmpleados";

const service = new ServiceEmpleados();

export default {
  name: "EmpleadosDetalle",
  data() {
    return {
      empleados: [],
      empleado: null,
      idEmpleado: 0,
    };
  },
  methods: {
    buscarEmpleado() {
       service.buscarEmpleados(this.idEmpleado).then(result=>{
        this.empleado=result;
       })
    },
  },
  mounted() {
    service.getEmpleados().then(result=>{
        this.empleados= result;
    })
  },
};
</script>

<style>
</style>