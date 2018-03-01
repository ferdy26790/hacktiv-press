import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/HomePage'
import AddArticle from '@/pages/AddArticle'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/addarticle',
      name: 'AddArticle',
      component: AddArticle
    }
  ]
})
