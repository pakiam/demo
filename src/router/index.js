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
    path: '/cart',
    name: 'Cart',
    props: true,
    component: () =>
      import(/* webpackChunkName: "programs" */ '../views/Cart.vue'),
  },
  {
    path: '/shop',
    name: 'Shop',
    props: true,
    component: () =>
      import(/* webpackChunkName: "programs" */ '../views/Shop.vue'),
    redirect: { name: 'Programs' },
    children: [
      {
        path: 'programs',
        name: 'Programs',
        props: true,
        component: () =>
          import(/* webpackChunkName: "programs" */ '../views/Programs.vue'),
        children: [
          {
            path: ':id',
            name: 'Program',
            props: true,
            component: () =>
              import(
                /* webpackChunkName: "program" */
                '../views/Program.vue'
              ),
          },
        ],
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
