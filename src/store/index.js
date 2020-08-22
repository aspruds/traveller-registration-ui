import Vue from 'vue'
import Vuex from 'vuex'
import introduction  from './introduction-module'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    'introduction': introduction
  }
})
