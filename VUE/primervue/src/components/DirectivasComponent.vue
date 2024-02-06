<template>
  <div>
    <h1 style="color:blue">Directivas VUE</h1>
    <ul v-if="series.length >0">
        <li v-for="serie in series" :key="serie">
            {{serie}}
        </li>
    </ul>
    <label>Numero:</label>
    <input type="number" v-model="numero"/>
    <h2 v-if="numero>0" style="color:green" >POSITIVO</h2>
    <h2 v-else-if="numero==0" style="color:red">CERO</h2>
    <h2 v-else style="color:purple">NEGATIVO</h2>
    <label>Nombre:</label>
    <input type="text" v-model="nombre"/>
    <br>
    <label>Edad:</label>
    <input type="number" v-model="edad"/>
    <h1 style="color:red">
        Nombre: {{nombre}}, Edad: {{edad}}
    </h1>
    {{$data}}
  </div>
</template>



<script>
export default {
    name: "DirectivasComponent",
    data(){
        return {
            series: [ "Futurama", "Suits", "House of Cards","Gen V"],
            numero: 0,
            nombre: "",
            edad: 0
        }
    }
}
</script>

<style>

</style>