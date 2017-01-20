import Vue from 'vue'
import App from './App'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import VueRouter from 'vue-router'
import router from './router'
import store from './store'
Vue.use(VueRouter)
Vue.use(MuseUI)

new Vue({ // eslint-disable-line
  el: '#app',
  render: h => h(App),
  router,
  store
}).$mount('#app')
