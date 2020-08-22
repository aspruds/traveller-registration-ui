import Vue from 'vue'
import Vuex from 'vuex'
import introduction  from './modules/introduction'
import travelDetails  from './modules/travel-details'
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
    'travelDetails': travelDetails,
    'lookups': lookups
  }
})
