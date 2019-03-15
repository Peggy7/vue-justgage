import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import vueJustgage from './lib/index'

Vue.use(vueJustgage)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
