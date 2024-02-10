<template>
    <div class="card">
        <span>
            <h3>#{{ props.id + 1 }}</h3>
            <h2>{{ props.date }}</h2>
        </span>
        <span>
            <h2>{{ props.title }}</h2>
            <p>{{ props.body }}</p>
        </span>     
        <button v-on:click="clicked2()">PUCHAME</button>
    </div>
</template>
<script setup lang="ts">
import type { IComment } from '@/interfaces/IComment';

const props = defineProps<IComment>();
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