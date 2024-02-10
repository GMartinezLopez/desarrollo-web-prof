<script setup lang="ts">
import {ref} from 'vue';
import type {Ref} from 'vue';

const name:Ref<string> = ref ('Ricardo Anaya');
const age:Ref<number> = ref (21);
const errors = ref([{
  name: '',
  age: ''
}]);

const error:Ref<string> = ref ('#d03');

const validation = () => {

  errors.value = [];

  if(name.value.length < 5) {
    errors.value.push({name:'Error de longitud', age:''});
  }
}

const validation2 = () => {

  errors.value = [];

  if(age.value < 5) {
    errors.value.push({name:'', age:'Error de edad'});
  }
}

</script>

<template>
  <main>
    <div>
      <input @input="validation()" v-model="name" type="text">
    </div>
    <div>
      <input @input="validation2()" v-model="age" type="text">
    </div>

    <h1 v-bind:style="{'color':error, 'background-color':'#cd3'}">{{ name }}</h1>
    <h2 :class="{'error': age > 10}">{{ age }}</h2>

    <h3>Errors:</h3>
    <span v-for="(err, index) in errors" :key="index">      
        {{ err }} + {{ index }}
    </span>
  </main>
</template>

<style scoped>
.error{
  color: white;
  background-color: red;
  border: 1px solid white;
}
</style>