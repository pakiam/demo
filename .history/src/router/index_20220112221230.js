import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Program from '../views/Program.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/programs',
    name: 'Programs',
    component: () =>
      import(/* webpackChunkName: "programs" */ '../views/Programs.vue'),
    children: [
      {
        path: ':id',
        name: 'Program',
        props: true,
        component: Program,
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
