<template>
    <div class="container">
        <div class="itemleft">
            <Ip>
                <template #main>
                    <One/>
                </template>
            </Ip>
            <Ip>
                <template #main>
                    <Two/>
                </template>
            </Ip>
        </div>
        <div class="itemrigth">
            <Ip>
                <template #main>
                    <Three/>
                </template>
            </Ip>
            <Ip>
                <template #main>
                    <Four/>
                </template>
            </Ip>
        </div>
    </div>
</template>

<script setup>
import Ip from "../../../components/ItemPage.vue"
import One from "../../../components/One.vue"
import Two from "../../../components/Two.vue"
import Three from "../../../components/Three.vue"
import Four from "../../../components/Four.vue"
</script>

<style lang="scss">
    .container{
        width: 100%;
        margin: 0 auto;
        // background-color: aquamarine;
        display: flex;
        .itemleft,.itemrigth{
            flex: 1;
        }
    }
</style>