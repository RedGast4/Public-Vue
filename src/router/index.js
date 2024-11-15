import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'


const routes = [
  {
    path: '/',
    name: 'Главная',
    component: Home

  },
  {
    path: '/about',
    name: 'Обо мне',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/blog',
    name: 'Блог',
    component: () => import(/* webpackChunkName: "blog" */ '../views/BlogView.vue')
  },
  {
    path: '/contacts',
    name: 'Контакты',
    component: () => import(/* webpackChunkName: "blog" */ '../views/ContactsView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(), 
  routes,
})

export default router
