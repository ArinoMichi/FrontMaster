<template>
  <div>
    <h1 style="color:blue">Numero hijo : {{numero}}</h1>
    <button @click="sumarHijo()">Sumar {{numero}}</button>
  </div>
</template>

<script>
export default {
    name:"HijoNumeros",
    props: ["numero"],

    methods:{
        sumarHijo(){
             //LLAMADA AL PADRE
        this.$emit("sumarPadre", this.numero);
        }
    }
}
</script>
