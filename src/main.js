import Vue from 'vue'

import '@/components/_globals'
import '@/components/_materials'
import '@/plugins'

import App from './App.vue'
import i18n from './i18n'

// import router from './router'
// import store from './store'

Vue.config.productionTip = false

new Vue({
    i18n,
    render: h => h(App)
}).$mount('#app')
