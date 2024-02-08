<template>
    <div class="card">
        <span>
            <h3>#{{ props.id }}</h3>
            <h2>{{ props.date }}</h2>
        </span>
        <span>
            <h2>{{ props.title }}</h2>
            <p>{{ props.body }}</p>
        </span>     
        <button @click="clicked()" v-on:click="clicked()"></button>
    </div>
</template>
<script setup lang="ts">
import type { IComment } from '@/interfaces/IComment';

const props = defineProps<IComment>();
const emits = defineEmits(['vistaWaos']);
const clicked = () => {
    alert("Hola desde el hijo");
}

</script>
<style scoped>
.card {
    border: 1px solid red;
    padding: 10px;
    margin: 5px;
}
</style>