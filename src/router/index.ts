// import { title } from 'process';
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
// import LoginView from '../views/login/index.vue';
// import HomeView from '../views/home/index.vue';
import {
  TrendCharts,
  Grid,
  List,
} from '@element-plus/icons-vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/login',
      name: 'login',

      component: () => import('../views/login/index.vue')
    },
    {
      path: '/home',
      name: 'home',

      component: () => import('../views/home/index.vue'),
      children:[
        {
          path:"/echarts",
          name:'echarts',
          component:()=>import('../views/home/childrens/EchartsView.vue'),
          meta:{
            title:'数据展示',
            icon:TrendCharts
          }
        },
        {
          path:"/pay",
          name:'pay',
          component:()=>import('../views/home/childrens/PayhartsView.vue'),
          meta:{
            title:'缴费管理',
            icon:Grid
          }
        },
        {
          path:"/user",
          name:'user',
          component:()=>import('../views/home/childrens/UserOne.vue'),
          meta:{
            title:'住户信息',
            icon:List
          },
          children:[
            {
              path:"/userlist",
              name:'userlist',
              component:()=>import('../views/home/childrens/UserList.vue'),
              meta:{
                classifyTitle:'住户信息',
                title:'住户信息列表'
              }
            },
            {
              path:"/userupdata",
              name:'userupdata',
              component:()=>import('../views/home/childrens/UserUpdata.vue'),
              meta:{
                classifyTitle:'住户信息',
                title:'住户信息修改'
              }
            },
          ]
        }
      ]
    },
    {
      path: '/',
      redirect: '/login'
    }
  ]

})

export default router
