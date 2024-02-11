<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Inicio</RouterLink>
    </nav>
  </header>

  <body>
    <div class="contenido">
      <h1>Ruta 2</h1>
    </div>
  </body>
</template>

<style scoped>
body {
  border: 1px solid var(--color-border);
}

header {
  width: 100%;
  border: 1px solid var(--color-border);
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  border: 1px solid var(--color-border);
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
