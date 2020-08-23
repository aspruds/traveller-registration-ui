import { getField, updateField } from 'vuex-map-fields';

const state = () => ({
  agreedToRules: false
});

const getters = {
  getField
};

const mutations = {
  updateField
};

export const introduction = {
  namespaced: true,
  state,
  getters,
  mutations
};