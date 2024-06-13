<template>
    <div>
        <h2>每日访客统计</h2>
        <div id="charttwo" class="two"></div>
    </div>
</template>

<script setup>
import { inject,onMounted,reactive } from 'vue';
import link from "../api/Link.js"
import url from "../api/url.js"



let $echarts=inject("echarts")
onMounted(()=>{
    let myChat=$echarts.init(document.getElementById("charttwo"))

    link(url.chartDataTwo).then((ok)=>{
        console.log(ok);

        myChat.setOption({
            xAxis:{
                type:"category",
                data:ok.data.day,
                boundaryGap :false,
                axisLine:{
                lineStyle:{
                    color:"#fff"
                }
            }
            },

            tooltip:{},
            yAxis:{
                type:"value",
                axisLine:{
                lineStyle:{
                    color:"#fff"
                }
            }
            },
            grid:{
                left:"1%",
                right:"4%",
                bottom:"3%",
                containLabel:true 
            },
            series:[
                {
                    type:"line",
                    name:"外卖",
                    data:ok.data.num.外卖,
                    stack:"Total",
                    smooth:true,
                    areaStyle:{
                        opacity:0.8,
                        color:new $echarts.graphic.LinearGradient(0,0,0,1,[
                        {
                            offset:0,
                            color:"aquamarine"
                        },
                        {
                            offset:1,
                            color:"aqua"
                        }
                    ])
                    },
                    lineStyle:{
                        width:0
                    }
                },
                {
                    type:"line",
                    name:"快递",
                    data:ok.data.num.快递,
                    stack:"Total",
                    smooth:true,
                    areaStyle:{
                        opacity:0.8,
                        color:new $echarts.graphic.LinearGradient(0,0,0,1,[
                        {
                            offset:0,
                            color:"orange"
                        },
                        {
                            offset:1,
                            color:"olive"
                        }
                    ])
                    },
                    lineStyle:{
                        width:0
                    }
                },
                {
                    type:"line",
                    name:"一般访客",
                    data:ok.data.num.一般访客,
                    stack:"Total",
                    smooth:true,
                    areaStyle:{
                        opacity:0.8,
                        color:new $echarts.graphic.LinearGradient(0,0,0,1,[
                        {
                            offset:0,
                            color:"rebeccapurple"
                        },
                        {
                            offset:1,
                            color:"purple"
                        }
                    ])
                    },
                    lineStyle:{
                        width:0
                    }
                },
                {
                    type:"line",
                    name:"授权访客",
                    data:ok.data.num.授权访客,
                    stack:"Total",
                    smooth:true,
                    areaStyle:{
                        opacity:0.8,
                        color:new $echarts.graphic.LinearGradient(0,0,0,1,[
                        {
                            offset:0,
                            color:"royalblue"
                        },
                        {
                            offset:1,
                            color:"blue"
                        }
                    ])
                    },
                    lineStyle:{
                        width:0
                    }
                },
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
    .two{
        height: 4rem;
    }
</style>