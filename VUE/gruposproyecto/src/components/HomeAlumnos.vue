<template>
  <div>
    <div class="container-fluid">
      <div class="d-flex flex-row" style="height: 100vh">
        <!-- Contenedor izquierdo (col-md-3) -->
        <div
          class="col-md-3 p-3"
          style="background-color: #3498db; color: white; border-radius: 8px; overflow-y: auto;"
        >
          <h3 class="mb-2">Alumnos</h3>
          <ul class="list-group" style="overflow-y: auto">
            <li
              v-for="alumno in alumnos"
              :key="alumno.id"
              class="list-group-item"
            >
              {{ alumno.nombre }}
            </li>
          </ul>
          <musica-component />
          <button class="btn btn-info btn-sm mt-3">Generar Informe</button>
          <button class="btn btn-info btn-sm mt-3" @click="generarGrupos">Generar Grupos</button>
        </div>

        <!-- Contenedor derecho (col-md-9) -->
        <div
          class="col-md-9 p-4"
          style="background-color: #9b59b6; color: white; border-radius: 8px"
        >
          <h2 class="text-center mt-5">
            NUMERO DE ALUMNOS: {{ contadorAlumnos }}
          </h2>
          <h2 class="mb-3">Contenedor Derecho</h2>

          <div v-for="(grupo, index) in gruposGenerados" :key="index">
            <h3>Equipo {{ index + 1 }}</h3>
            <ul v-for="alumno in grupo" :key="alumno.idAlumno">
              <li>{{ alumno.nombre }} {{ alumno.apellidos }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MusicaComponent from "./MusicaComponent.vue";
import ServiceAlumnos from "@/services/ServiceAlumnos";

const services = new ServiceAlumnos();

export default {
  components: { MusicaComponent },
  name: "HomeAlumnos",
  data() {
    return {
      alumnos: [],
      contadorAlumnos: 0,
      gruposGenerados: [],
    };
  },
  mounted() {
    services.getAlumnos().then((result) => {
      this.alumnos = result;
      this.contadorAlumnos = this.alumnos.length;
    });
  },
  methods: {
    generarGrupos() {
      // Copia el array de alumnos y mézclalo para formar equipos aleatorios
      const alumnosAleatorios = this.mezclarArray([...this.alumnos]);

      // Divide los alumnos en equipos de 3
      this.gruposGenerados = [];
      for (let i = 0; i < alumnosAleatorios.length; i += 3) {
        this.gruposGenerados.push(alumnosAleatorios.slice(i, i + 3));
      }

      // Si el último grupo tiene solo un alumno, agrégalo al grupo anterior
      if (
        this.gruposGenerados.length > 1 &&
        this.gruposGenerados[this.gruposGenerados.length - 1].length === 1
      ) {
        const ultimoGrupo = this.gruposGenerados.pop();
        this.gruposGenerados[this.gruposGenerados.length - 1] =
          this.gruposGenerados[this.gruposGenerados.length - 1].concat(
            ultimoGrupo
          );
      }
    },
    mezclarArray(array) {
      // Función para mezclar aleatoriamente un array
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    },
  },
};
</script>

<style scoped>
/* Puedes agregar estilos adicionales aquí si es necesario */
</style>
