import Vue from 'vue'
import Router from 'vue-router'

const Home = r => require.ensure([], ()=> r(require('../pages/home/home.vue')),'h5')


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
