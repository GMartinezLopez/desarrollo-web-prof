<script setup lang="ts">
import { RouterLink } from 'vue-router'
import DataItem from '@/components/datos/DataItem.vue'
import DataInfo01 from '@/data/DataInfo01'
import DataInfo02 from '@/data/DataInfo02'
import DataInfo03 from '@/data/DataInfo03'
import DataInfo04 from '@/data/DataInfo04'
import DataInfo05 from '@/data/DataInfo05'
import DataInfo06 from '@/data/DataInfo06'


const vistaActual01 = false;
const vistaActual02 = false;
const vistaActual03 = false;
const vistaActual04 = true;
const vistaActual05 = false;
const vistaActual06 = false;
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Inicio</RouterLink>
    </nav>
    <h1>Vista 4</h1>
  </header>
  <body>
    <div class="">
      <div v-if="vistaActual01">
        <ul>
          <DataItem v-bind="datos" v-for="(datos, index) in DataInfo01" :key="index" />
        </ul>
      </div>
      <div v-else-if="vistaActual02">
        <ul>
          <DataItem v-bind="datos" v-for="(datos, index) in DataInfo02" :key="index" />
        </ul>
      </div>
      <div v-else-if="vistaActual03">
        <ul>
          <DataItem v-bind="datos" v-for="(datos, index) in DataInfo03" :key="index" />
        </ul>
      </div>
      <div v-else-if="vistaActual04">
        <ul>
          <DataItem v-bind="datos" v-for="(datos, index) in DataInfo04" :key="index" />
        </ul>
      </div>
      <div v-else-if="vistaActual05">
        <ul>
          <DataItem v-bind="datos" v-for="(datos, index) in DataInfo05" :key="index" />
        </ul>
      </div>
      <div v-else-if="vistaActual06">
        <ul>
          <DataItem v-bind="datos" v-for="(datos, index) in DataInfo06" :key="index" />
        </ul>
      </div>
    </div>
  </body>
</template>

<style scoped>
body {
  --border: 1px solid var(--color-border);
  padding: 1rem;
  font-size: 140%;
}

header {
  width: 100%;
  --border: 1px solid var(--color-border);
  padding-bottom: 10px;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  --border: 1px solid var(--color-border);
  text-align: left;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  padding: 1rem 1rem 1rem 1rem;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border: 1px solid var(--color-border);
}
</style>
