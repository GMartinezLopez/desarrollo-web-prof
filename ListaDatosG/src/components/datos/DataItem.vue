<template>
    <div class="card">
        <span>
            <h1>{{ props.name }} {{ props.lastname }}</h1>
            <h2>Registro: {{ props.id }}</h2>
            <br />
        </span>
        <span>
            <h3>Edad: {{ props.age }}</h3>
            <h3>Genero: {{ props.gender }}</h3>
        </span>
        <br /><br /><br /><br />
        <h3>Universidad Tecnológica de Cancún</h3>
        <div class="fotoContainer">
            <img class="foto" src="../../images/fotos/pfp-glasses.jpg" /><br />
            <button @click="clicked()" class="btnFoto">Mostrar / Ocultar</button>
        </div>
    </div>
</template>
<script setup lang="ts">
import type { InterInfo } from '@/interfaces/InterInfo'

const props = defineProps<InterInfo>()

const clicked = () => { }
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500&display=swap');

h1 {
    font-weight: 500;
}

h2 {
    font-weight: 400;
}

h3 {
    font-weight: 300;
}

.card {
    width: 50rem;
    height: 30rem;
    font-family: 'Quicksand', sans-serif;
    color: #22ffa3;
    background-color: #003531;
    --border: 1px solid red;
    border-radius: 22px;
    padding: 2rem;
    margin: 10px;
    --box-shadow: 0 10px 50px #999 ;
    animation: 3s infinite  ease-out breathing-color;
}

.fotoContainer {
    width: fit-content;
    position: relative;
    left: 30rem;
    bottom: 20rem;
    --border: 1px solid red;
}

.foto {
    width: 11rem;
    box-shadow:
        0 12px 16px 0 rgba(0, 0, 0, 0.5),
        0 17px 50px 0 rgba(0, 0, 0, 0.4);
}

.btnFoto {
    cursor: pointer;
    font-family: 'Quicksand', sans-serif;
    color: rgb(255, 255, 255);
    background-color: #ffffff00;
    border: 2px solid;
    width: 11rem;
    height: 2.5rem;
    border-radius: 4px;
    text-align: center;
    display: inline-block;
    font-size: 16px;
    transition-duration: 0.2s;
}

.btnFoto:hover {
    background-color: #3e8e41;
    /* Green */
    color: white;
    box-shadow: 0 9px #999;
    --box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.5), 0 17px 50px 0 rgba(0, 0, 0, 0.4);
}

.btnFoto:active {
    background-color: #e32424;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
}

@keyframes breathing-color {
    from
    {
        box-shadow: 0 0px 0px 0px hsl(162, 100%, 32%);
    }
    to
    {
        box-shadow: 20px 40px 240px 60px rgba(29, 29, 29, 0);
    }
}
</style>
