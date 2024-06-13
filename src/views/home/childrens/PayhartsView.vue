<template>
    <div class="content">
        <div class="inputDom">
            <el-input v-model="input" style="width: 240px" placeholder="请输入收款金额" />
            <el-button type="success" @click="MakeQrcode">生成二维码</el-button>

        </div>
        <div class="qrcode" ref="qrcodDom"></div>
    </div>
</template>

<script setup>
// import { ref,nextTick } from 'vue'
// import QRcode from "qrcodejs2"
// const input = ref('')

// let qrcodDom = ref(null)

// let MakeQrcode=()=>{
//     qrcodDom.value.innerHTML=""
//     nextTick(()=>{
//         new QRcode(qrcodDom.value,{
//             text:input.value,//生成二维码的内容
//             colorDark:"#000",
//             colorLight:"#fff",
//         })
//     })
// }
</script>

<style lang="scss">
.qrcode{
    width: 300px;
    height: 300px;
    margin: 0 auto;
}
</style>