<script setup lang="ts">
import {ref} from 'vue';
import type {Ref} from 'vue';

const selectedOption: Ref<string> = ref('1'); // Valor predeterminado
const name:Ref<string> = ref ('Ricardo');
const apellido:Ref<string> = ref ('Anaya');
const age:Ref<number> = ref (21);
const genero:Ref<string> = ref ('Helicóptero apache');
const errors = ref([{
  name: '',
  apellido: '',
  age: '',
  genero: '',
}]);

const error:Ref<string> = ref ('#d03');

const validation = () => {

  errors.value = [];

  if(name.value.length < 5 || name.value.length > 18) {
    errors.value.push({name:'Error de longitud', apellido:'', age:'', genero:''});
  }

  if(apellido.value == name.value) {
    errors.value.push({name:'', apellido:'Error: el apellido no puede ser igual al nombre.', age:'', genero:''});
  }

  if(age.value < 0 || age.value > 60) {
    errors.value.push({name:'', apellido:'', age:'Error, la edad debe estar entre 0 y 60 años.', genero:''});
  }

  if(age.value < 0 || age.value > 60) {
    errors.value.push({name:'', apellido:'', age:'Error, la edad debe estar entre 0 y 60 años.', genero:''});
  }
}



</script>

<template>
  <main>
    <div class="about">
    <h1>Actividad: Fromulario</h1>
  </div>
  <div @input="validation()">
    <div>
      <input v-model="name" type="text">
    </div>
    <div>
      <input v-model="apellido" type="text">
    </div>
    <div>
      <input v-model="age" type="text">
    </div>   
    <div>
      <div>
        <select v-model="selectedOption">
			<option value="1">Masculino</option>
			<option value="2">Femenino</option>
			<option value="3">Otro</option>
	</select>
      </div>
      <div>
        <input type="text" :disabled="selectedOption == '1'">
      </div>
    </div>

    <h3>Errors:</h3>
    <span v-for="(err, index) in errors" :key="index">      
        {{ err }}
    </span>
  </div>
  </main>
</template>

<style scoped>
.error{
  color: white;
  background-color: red;
  border: 1px solid white;
}
</style>