import Vue from 'vue'
import Vuex from 'vuex'
import lookups  from './modules/lookups'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    'lookups': lookups
  }
})
