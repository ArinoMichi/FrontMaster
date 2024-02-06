<template>
  <div>
  </div>
</template>

<script>
import ServiceDepartamentos from '../services/ServiceDepartamentos'

const service = new ServiceDepartamentos();

export default {
    name: "DeleteDepartamento",
    mounted(){
        var id = this.$route.params.id;
        service.deleteDepartamento(id).then(result=>{
            console.log(result);
            this.$router.push("/");
        })
    }
}
</script>
