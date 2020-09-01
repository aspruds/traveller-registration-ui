const state = () => ({
  agreedToRules: false
});

const mutations = {
  setAgreedToRules(state, value) {
    state.agreedToRules = value
  }
};

export const introduction = {
  namespaced: true,
  state,
  mutations
};