<template>
    <div class="card">
        <span>
            <h3>Registro: {{ props.id }}</h3>
            <h2>{{ props.name }}</h2>
        </span>
        <span>
            <h2>{{ props.lastname }}</h2>
            <p>{{ props.age }}</p>
            <p>{{ props.gender }}</p>
        </span>
        <button @click="clicked()">Mostrar / Ocultar</button>
        <div>
            <img class="foto" src="../../images/fotos/pfp-glasses.jpg" />
        </div>
    </div>
</template>
<script setup lang="ts">
import type { InterInfo } from '@/interfaces/InterInfo'

const props = defineProps<InterInfo>()

const clicked = () => {
    console.log(props.id)
    alert('Seleccionaste: ' + props.id)
}
</script>
<style scoped>
.card {
    border: 1px solid red;
    padding: 10px;
    margin: 5px;
}

.foto {
    width: 10%;
    position: relative;
    
}
</style>
