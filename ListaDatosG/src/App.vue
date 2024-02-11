<script setup lang="ts">
import { RouterView } from 'vue-router'
import DataList from './components/datos/DataList.vue';

</script>

<template>  
  <main>
    <RouterView />
    <DataList></DataList>
  </main>
</template>

