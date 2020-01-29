import Vue from 'vue'
import VueRouter from 'vue-router'
import { ROUTES } from '@/constants/routes'

Vue.use(VueRouter)

const routes = [
  {
    path: ROUTES.HOME.path,
    name: ROUTES.HOME.name,
    component: () => import('@/views/home/index.vue')
  },
  {
    path: ROUTES.ABOUT.path,
    name: ROUTES.ABOUT.name,
    component: () =>
      import(/* webpackChunkName: "about" */ '@/views/about/About.vue')
  },
  {
    path: ROUTES.CONTENT.path,
    name: ROUTES.CONTENT.name,
    component: () => import('@/views/content/index.vue'),
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
