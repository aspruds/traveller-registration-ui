import {TransportDetails} from "@/models/TransportDetails";

export default {
  namespaced: true,
  state: new TransportDetails({
    carrierType: "plane",
    flightNumber: "BT101",
    dateOfEntry: new Date().toISOString().substr(0, 10)
  }),
  mutations: {
    setCarrierType(state, value) {
      state.carrierType = value
    },
    setFlightNumber(state, value) {
      state.flightNumber = value
    },
    setDateOfEntry(state, value) {
      state.dateOfEntry = value
    },
  },
  actions: {},
  modules: {}
}