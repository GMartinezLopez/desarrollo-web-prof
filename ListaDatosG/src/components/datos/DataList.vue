<!-- ========== Start Section ========== -->

<!--CODIGO DE REFERENCIA, NO SE ESTA USANDO LA PAGINA EN LA APP-->

<!-- ========== End Section ========== -->

<template>
  <div v-if="vistaActual01">
    <ul>
      <DataItem        
        v-bind="datos"
        v-for="(datos, index) in DataInfo01"
        :key="index"
      />
    </ul>
  </div>
  <div v-else-if="vistaActual02">
    <ul>
      <DataItem        
        v-bind="datos"
        v-for="(datos, index) in DataInfo02"
        :key="index"
      />
    </ul>
  </div>
  <div v-else-if="vistaActual03">
    <ul>
      <DataItem        
        v-bind="datos"
        v-for="(datos, index) in DataInfo03"
        :key="index"
      />
    </ul>
  </div>
  <div v-else-if="vistaActual04">
    <ul>
      <DataItem        
        v-bind="datos"
        v-for="(datos, index) in DataInfo04"
        :key="index"
      />
    </ul>
  </div>
  <div v-else-if="vistaActual05">
    <ul>
      <DataItem        
        v-bind="datos"
        v-for="(datos, index) in DataInfo05"
        :key="index"
      />
    </ul>
  </div>
  <div v-else-if="vistaActual06">
    <ul>
      <DataItem        
        v-bind="datos"
        v-for="(datos, index) in DataInfo06"
        :key="index"
      />
    </ul>
  </div>
</template>

<script setup lang="ts">
import DataInfo01 from '@/data/DataInfo01'
import DataInfo02 from '@/data/DataInfo02'
import DataInfo03 from '@/data/DataInfo02'
import DataInfo04 from '@/data/DataInfo02'
import DataInfo05 from '@/data/DataInfo02'
import DataInfo06 from '@/data/DataInfo02'
import DataItem from './DataItem.vue'

const vistaActual01 = false;
const vistaActual02 = true;
const vistaActual03 = true;
const vistaActual04 = true;
const vistaActual05 = true;
const vistaActual06 = true;

</script>
<style scoped></style>