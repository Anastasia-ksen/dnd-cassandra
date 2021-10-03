import Vue from 'vue'
import App from './App.vue'
import i18n from './i18n'
import router from '@/router'

import '@/components/_globals'
import '@/_plugins'

// import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
