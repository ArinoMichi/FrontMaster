<template>
  <div>
    <h1 style="color: brown">{{ nombredeporte }}</h1>
    <button @click="ejecutarHijo()">MARCAR COMO FAVORITO</button>  
  </div>
</template>

<script>
export default {
  name: "HijoDeportes",
  props: ["nombredeporte"],
  mounted() {
    console.log(this.nombredeporte);
  },
  methods:{
    ejecutarHijo(){
        //LLAMADA AL PADRE
        this.$emit("metodoPadre", this.nombredeporte, "Alexia");
    }
  },
  data(){
    return{
        nombre: ""
    }
  }
};
</script>
