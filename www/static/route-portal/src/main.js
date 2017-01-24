import Vue from 'vue'
import VueRouter from 'vue-router'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import VueCookie from 'vue-cookie'
import router from './router'
import store from './store'
import App from './App'

Vue.use(VueRouter)
Vue.use(MuseUI)
Vue.use(VueCookie)

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
}).$mount('#app')
