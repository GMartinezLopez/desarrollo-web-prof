<template>
    <div><RouterLink :to="data.path">{{ data.name }}</RouterLink></div>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import type { IMenuItem } from '@/interfaces/IMenuItem.ts';
const data = defineProps<IMenuItem>();
</script>