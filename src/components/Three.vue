<template>
    <div>
        <h2>报修统计</h2>
        <div id="chartthree" class="three"></div>
    </div>
</template>

<script setup>
import { inject,onMounted,reactive } from 'vue';
import link from "../api/Link.js"
import url from "../api/url.js"


let $echarts=inject("echarts")
onMounted(()=>{
    let myChat=$echarts.init(document.getElementById("chartthree"))

    link(url.chartDataThree).then((ok)=>{
        console.log(ok);

        myChat.setOption({
            legend:{top:"bottom"},
            tooltip:{},
            series:[
                {
                    type:"pie",
                    data:ok.data,
                    radius:[10,100],
                    center:["50%","45%"],
                    roseType:"area"
                }
            ]
            
        })
    })
    
})
</script>

<style lang="scss" scoped>
    h2{
        height:0.6rem;
        color: white;
        line-height: 0.6rem;
        text-align: center;
        font-size: 0.25rem;
    }
    .three{
        height: 4rem;
    }
</style>