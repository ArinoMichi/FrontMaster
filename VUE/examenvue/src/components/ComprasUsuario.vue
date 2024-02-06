<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">Compras del Usuario</h1>
    <div class="card" v-for="compra in compras" :key="compra.idPedido">
      <div class="card-body">
        <h5 class="card-title text-primary">Pedido: {{ compra.idPedido }}</h5>
        <p class="card-text">
          <strong class="text-success">ID Cubo:</strong> {{ compra.idCubo }}<br>
          <strong class="text-info">ID Usuario:</strong> {{ compra.idUsuario }}<br>
          <strong class="text-danger">Fecha:</strong> {{ formatearFecha(compra.fechaPedido) }}
        </p>
      </div>
    </div>
    <div v-if="compras.length === 0" class="text-center mt-4">
      <p class="text-muted">No hay compras realizadas.</p>
    </div>
  </div>
</template>

<script>
import ServiceTienda from '../services/ServicesTienda'
const service = new ServiceTienda();

export default {
  name: "ComprasUsuario",
  data() {
    return {
      compras: []
    };
  },
  mounted() {
    service.verCompras().then(result => {
      this.compras = result;
    });
  },
  methods: {
    formatearFecha(fecha) {
      // Aquí puedes implementar lógica de formato de fecha si es necesario
      return fecha;
    }
  }
};
</script>

<style scoped>
.card {
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-title {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.card-text {
  font-size: 1rem;
}

.text-primary {
  color: #007bff; /* Color azul */
}

.text-success {
  color: #28a745; /* Color verde */
}

.text-info {
  color: #17a2b8; /* Color azul claro */
}

.text-danger {
  color: #dc3545; /* Color rojo */
}

.text-muted {
  color: #6c757d; /* Color gris */
}

.text-center {
  text-align: center;
}
</style>
