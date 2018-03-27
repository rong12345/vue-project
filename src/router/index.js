import Vue from 'vue'
import VueResource from 'vue-resource'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import IndexPage from '@/pages/index'
import DetailPage from '@/pages/detail'
import Analysis from '@/pages/Detail/analysis'
import Count from '@/pages/Detail/count'
import Forecast from '@/pages/Detail/forecast'
import Publish from '@/pages/Detail/publish'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  mode: 'history',  //url #会去掉
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
      path: '/detail',
      component: DetailPage,
      redirect: '/detail/analysis',
      children:[
        {
          path:'forecast',
          component:Forecast
        },
        {
          path:'analysis',
          component:Analysis
        },
        {
          path:'publish',
          component:Publish
        },
        {
          path:'count',
          component:Count
        }
      ]
    }
  ]
})
