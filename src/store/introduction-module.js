import {SET_AGREED_TO_RULES} from './mutation-types'

export default {
  namespaced: true,
  state: {
    agreedToRules: false
  },
  mutations: {
    [SET_AGREED_TO_RULES] (state, value) {
      state.agreedToRules = value
    }
  },
  actions: {
  },
  modules: {
  }
}
