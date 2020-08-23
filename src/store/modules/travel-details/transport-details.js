import {TransportDetails} from "@/models/TransportDetails";

import { getField, updateField } from 'vuex-map-fields';

export default {
  namespaced: true,
  state: new TransportDetails({
    carrierType: "plane",
    flightNumber: "BT101",
    dateOfEntry: new Date().toISOString().substr(0, 10)
  }),
  getters: {
    getField,
  },
  mutations: {
    updateField,
  },
  actions: {},
  modules: {}
}
