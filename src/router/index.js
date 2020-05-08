import Vue from 'vue'
import VueRouter from 'vue-router'
import Nowplaying from '../views/film/Nowplaying'
import Center from '../views/Center'
import Cinema from '../views/Cinema'
import Film from '../views/Film'
import Comingsoon from '../views/film/Comingsoon'
import Detail from '../views/Detail'
import City from '../views/City'

Vue.use(VueRouter)

const routes = [
  { path: '/cinema', component: Cinema },
  { path: '/center', component: Center },
  {
    path: '/film',
    component: Film,
    redirect: '/film/nowplaying',
    children: [
      { path: 'nowplaying', component: Nowplaying },
      { path: 'comingsoon', component: Comingsoon }
    ]
  },
  { path: '', redirect: '/film/nowplaying' },
  { path: '/detail/:id', name: 'wangdetail', component: Detail, props: true },
  { path: '/city', component: City }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
