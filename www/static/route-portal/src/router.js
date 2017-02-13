import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/index'
import AppBar from './components/AppBar'
import Register from './components/Register'
import Sigin from './components/Sigin'
import Auth from './components/Auth'
import Portal from './components/Portal'
import footbar from './components/footbar'
import wx from './components/wx'
import Login from './components/login'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {path: '/', component: Index},
    {path: '/AppBar', component: AppBar},
    {path: '/wx', component: wx},
    {path: '/login', component: Login},
    {path: '/portal', component: Portal},
    {path: '/verify', component: Auth},
    {path: '/register', component: Register},
    {path: '/footbar', component: footbar},
    {path: '/sigin', component: Sigin}
  ]
})
export default router
