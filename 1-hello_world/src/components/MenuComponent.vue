<template>
    <div>
        <MenuItem 
            v-for="route in routeViews" 
            :name="route.name" 
            :path="route.path" 
            :key="route.name"
        ></MenuItem>
    </div>
</template>
<script setup lang="ts">
import MenuItem from './MenuItem.vue';
import router from '@/router/index';
import type IMenuItem from "@/interfaces/IMenuItem";

const routeViews = router.options.routes.filter(route => {
    return route;
}) as IMenuItem[];

</script>