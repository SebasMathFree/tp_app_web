<script>
import {FieldsApiService} from "@/dtaquito/services/field.api.service.js";

export default {
  name: "field-detail",
  title: "Field Details",
  data() {
    return {
      field: null,
      FieldsService: null,
      userId: localStorage.getItem('userId'),
    }
  },
  async created() {
    this.FieldsService = new FieldsApiService();
    const fieldId = this.$route.params.id;
    const response = await this.FieldsService.getById(fieldId);
    this.field = response.data;
  },
  methods: {
    async reserveField() {
      this.field.reserve = this.userId;
      await this.FieldsService.update(this.field.id, this.field);
      this.$router.push('/fields');
    },
    cancel() {
      this.$router.push('/fields');
    }
  }
}
</script>
<template>
  <div v-if="field" class="field-detail">
    <div class="image-container">
      <img :src="field.image" alt="field image">
    </div>
    <div class="info-container">
      <h1>{{ field.name }}</h1>
      <p>ID: {{ field.id }}</p>
      <p>Price: {{ field.price }}</p>
      <p>Rating: {{ field.rating }}</p>
      <p>Descripción: {{ field.descripcion }}</p>
      <p>Capacidad: {{ field.capacidad }}</p>
      <button @click="reserveField">Reservar</button>
      <button @click="cancel">Cancelar</button>
    </div>
  </div>
</template>

<style scoped>
.field-detail {
  display: flex;
  height: 100vh;
}

.image-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.info-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

}

img {
  width: 300px;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
}

p {
  margin: 10px 0;
}

button {
  padding: 5px;
  margin: 10px 0;
  font-size: 14px;
  border-radius: 5px;
  border: none;
  background-color: forestgreen;
  color: white;
  cursor: pointer;
  width: 50%;
  align-items: center;
}

button:hover {
  background-color: goldenrod;
}
</style>