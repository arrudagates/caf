
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/reports'
  },
  {
    path: '/reports',
    name: 'reports',
    meta: {
      auth: true
    },
    component: () => import('../views/reports.vue')
  },
 {
    path: '/reports/:id/executions',
    name: 'executions',
    meta: {
      auth: true
    },
    component: () => import('../views/executions.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('user')

  if (to.matched.some(record => record.meta.auth) && !loggedIn) {
    next('/login')
    return
  }
  next()
})

export default router
