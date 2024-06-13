<template>
    <div>
        <el-icon @click="ck">
            <CaretRight v-if="$store.state.HomeModule.navBool" />
            <CaretLeft v-else />
        </el-icon>
    </div>
</template>

<script setup>
import store from '@/store';
import { CaretRight, CaretLeft } from '@element-plus/icons-vue';
import {useStore} from "vuex"

// import {ref} from "vue"
// let bool = ref(true)

let ck =()=>{
    store.commit("SET_NAV_BOOL")
    
}

</script>

<style lang="scss">
.el-header {
    line-height: 70px;

    .el-icon {
        font-size: 20px;
    }
}
</style>