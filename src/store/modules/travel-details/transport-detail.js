import {createTransportDetails} from "@/models/TransportDetails";

const state = () => createTransportDetails();

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
