<script setup>
    import * as echarts from "echarts";
    import { provide, defineComponent } from 'vue';
    provide ("echarts",echarts)
</script>

<template>

    <router-view/>
</template>

<style lang="scss">
     
</style>
