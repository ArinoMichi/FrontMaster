<template>
  <div class="animal-select-container">
    <label>Seleccione uno o más Animales:</label>
    <select
      id="animalSelect"
      v-model="selectedAnimals"
      multiple
      size="5"
      class="animal-select"
    >
      <option
        v-for="animal in animals"
        :key="animal.id"
        :value="animal.id"
      >
        {{ animal.name }}
      </option>
    </select>
    <div class="selected-animals">
      <strong>Selecciones:</strong>
      <ul>
        <li v-for="selectedAnimal in selectedAnimals" :key="selectedAnimal">
          {{ getAnimalName(selectedAnimal) }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    name: "SeleccionMultiple",
  data() {
    return {
      animals: [
        { id: 1, name: "Perro" },
        { id: 2, name: "Gato" },
        { id: 3, name: "Ratón" },
        { id: 4, name: "Pájaro" },
        { id: 5, name: "Serpiente" },
      ],
      selectedAnimals: [],
    };
  },
  methods: {
    getAnimalName(id) {
      const animal = this.animals.find((a) => a.id === id);
      return animal ? animal.name : "";
    },
  },
};
</script>

<style>
.animal-select-container {
  font-family: Arial, sans-serif;
  width: 300px;
  margin: 0 auto;
  text-align: center;
}

.animal-select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.selected-animals {
  margin-top: 20px;
}

.selected-animals ul {
  list-style: none;
  padding: 0;
}

.selected-animals li {
  padding: 5px;
  background-color: #f0f0f0;
  margin: 5px 0;
  border-radius: 5px;
}
</style>