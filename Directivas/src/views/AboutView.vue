<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';

const selectedOption: Ref<string> = ref('1'); // Valor predeterminado
const name: Ref<string> = ref('');
const apellido: Ref<string> = ref('');
const age: Ref<number> = ref(1);
const genero: Ref<string> = ref('Helicóptero apache');
const errors = ref([{
  name: '',
  apellido: '',
  age: '',
  genero: '',
}]);

const error: Ref<string> = ref('#d03');

const validation = () => {

  errors.value = [];

  if (name.value.length < 5 || name.value.length > 18) {
    errors.value.push({ name: 'Error de longitud', apellido: '', age: '', genero: '' });
  }

  if (apellido.value == name.value) {
    errors.value.push({ name: '', apellido: 'Error: el apellido no puede ser igual al nombre.', age: '', genero: '' });
  }

  if (age.value < 0 || age.value > 60) {
    errors.value.push({ name: '', apellido: '', age: 'Error, la edad debe estar entre 0 y 60 años.', genero: '' });
  }

  if (genero.value != 'Helicóptero apache') {
    errors.value.push({ name: '', apellido: '', age: '', genero: 'Error, solo puedes ser un helicóptero apache' });
  }
}



</script>

<template>
  <main>
    <div>
      <h1>Actividad: Fromulario</h1>
    </div>
    <div @input="validation()" class="container">
      <div>
        <h3>Nombre:</h3>
        <input v-model="name" type="text" placeholder="Nombre...">
      </div>
      <div>
        <h3>Apellido:</h3>
        <input v-model="apellido" type="text" placeholder="Apellido...">
      </div>
      <div>
        <h3>Edad:</h3>
        <input v-model="age" type="text" placeholder="Edad...">
      </div>
      <div>
        <div>
          <h3>Género:</h3>
          <select v-model="selectedOption">
            <option value="1">Masculino</option>
            <option value="2">Femenino</option>
            <option value="3">Otro</option>
          </select>
        </div>
        <div>
          <h3>Especificar en caso de otro:</h3>
          <input v-model="genero" type="text" :disabled="selectedOption != '3'" placeholder="Género...">
        </div>
      </div>
      <div class="errContainer">
        <h3>Errors:</h3>
        <span v-for="(err, index) in errors" :key="index">
          {{ err }}
        </span>
      </div>
    </div>
  </main>
</template>

<style scoped>
.error {
  color: white;
  background-color: red;
  border: 1px solid white;
}

.container {
  background-color: rgb(241, 241, 241);
  padding: 10px;
}

h3 {
  color: black;
}

span {
  color: black;
}

input {
  position: relative;
  width: 200px;
  padding: 10px 20px;
  margin: 8px 0;
  border: 6px solid rgb(36, 179, 124);
  border-radius: 4px;
  color: rgb(0, 0, 0);
  transition: all 0.4s ease-in-out;
  box-sizing: border-box;
}

input:focus {
  border: 6px solid rgb(26, 97, 70);
  outline: none;
  width: 90%;
}

select {
  width: 100%;
  padding: 10px 20px;
  border: 3px solid rgb(36, 179, 124);
  border-radius: 4px;
  color: rgb(0, 0, 0);
}</style>