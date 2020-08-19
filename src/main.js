import Vue from 'vue'
import App from '@/containers/App.vue'
import i18n from './i18n'
import router from './router'// loads from src/router/index.js

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
