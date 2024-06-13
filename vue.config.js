import { defineConfig } from 'vite'
const { defineConfig } = require('@vue/cli-service')
module.expoets = defineConfig({

    // publicPath:"./",

    transpileDependencies: true,
    lintOnSave:false,
    css:{
        loaderOptions:{
            scss:{
                additionalData:'@import "./src/styles/style.scss;'
            }
        }
    }

})