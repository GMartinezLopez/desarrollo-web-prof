<template>
    <div class="card">
        <span>
            <h3>#{{ props.id }}</h3>
            <h2>{{ props.name }}</h2>
        </span>
        <span>
            <h2>{{ props.lastname }}</h2>
            <p>{{ props.age }}</p>
            <p>{{ props.gender }}</p>
        </span>     
        <button v-on:click="clicked2()">CLICKEAME</button>
    </div>
</template>
<script setup lang="ts">
import type { InterInfo } from '@/interfaces/InterInfo';

const props = defineProps<InterInfo>();
const emits = defineEmits(['vistaWaos', 'sayGoodBye']);

// const clicked = () => {
//     emits('vistaWaos', props.id);
// }

const clicked2 = () => {
    emits('sayGoodBye', props.id);
    
}

</script>
<style scoped>
.card {
    border: 1px solid red;
    padding: 10px;
    margin: 5px;
}
</style>