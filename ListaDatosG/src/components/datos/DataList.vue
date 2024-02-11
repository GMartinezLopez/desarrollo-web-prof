<template>
    <div>
      <button @click="clicked($event)">CLICKEAME</button>
      <ul>
        <DataItem @say-good-bye="clicked($event)" v-bind="comments" v-for="(comments, index) in DataInfo" :key="index" />
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
  import DataInfo from '@/data/DataInfo'
  import DataItem from './DataItem.vue'
  
  const clicked = (event: any) => {
    console.log(event);
    
      alert('Seleccionaste: ' + event);
  }
  
  </script>
  <style scoped></style>