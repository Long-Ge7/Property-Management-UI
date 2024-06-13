import './assets/main.css'

import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import store from './store';
// import App from './views/login/index.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import "lib-flexible/flexible.js"

const app = createApp(App)

app.use(ElementPlus)

app.use(createPinia())
app.use(store);
app.use(router)

app.mount('#app')
