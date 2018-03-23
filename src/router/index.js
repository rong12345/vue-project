import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import IndexPage from '@/pages/index'

Vue.use(Router)

export default new Router({
  mode: 'history',  //url #会去掉
  routes: [
    {
      path: '/',
      component: IndexPage
    }
  ]
})
