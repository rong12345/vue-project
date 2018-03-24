import Vue from 'vue'
import VueResource from 'vue-resource'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import IndexPage from '@/pages/index'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  mode: 'history',  //url #会去掉
  routes: [
    {
      path: '/',
      component: IndexPage
    }
  ]
})
