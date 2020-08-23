import Vue from 'vue'
import Vuex from 'vuex'
import introduction  from './modules/introduction'
import registration  from './modules/registration'
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
    'introduction': introduction,
    'registration': registration,
    'lookups': lookups
  }
})
