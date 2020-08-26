import {TransportDetails} from "@/models/TransportDetails";

const state = () => new TransportDetails();

const mutations = {
    setCarrierType (state, value) {
        state.carrierType = value
    },
    setFlightNumber (state, value) {
        state.flightNumber = value
    },
    setDateOfEntry (state, value) {
        state.dateOfEntry = value
    }
};

export default {
    namespaced: true,
    state,
    mutations
}
