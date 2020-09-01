import Vue from 'vue'
import App from '@/containers/App.vue'
import i18n from '@/plugins/i18n'
import router from './router'// loads from src/router/index.js
import vuetify from './plugins/vuetify';
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
