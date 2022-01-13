import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

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
    props: true,
    component: () =>
      import(/* webpackChunkName: "programs" */ '../views/Programs.vue'),
    children: [
      {
        path: ':id',
        name: 'PageProgram',
        props: true,
        component: () =>
          import(
            /* webpackChunkName: "program" */
            '../views/Program.vue'
          ),
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
