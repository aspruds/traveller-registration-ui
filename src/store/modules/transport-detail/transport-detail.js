import {TransportDetails} from "@/models/TransportDetails";

const state = () => new TransportDetails();

const mutations = {
    setCarrierType (state, value) {
        state.carrierType = value
    },
    setFlightNumber (state, value) {
        state.flightNumber = value
    },
    setRouteNumber (state, value) {
        state.routeNumber = value
    },
    setRouteNumberKnown (state, value) {
        state.routeNumberKnown = value
    },
    setRouteOrigin (state, value) {
        state.routeOrigin = value
    },
    setRouteDepartureDate (state, value) {
        state.routeDepartureDate = value
    },
    setRouteDepartureTime (state, value) {
        state.routeDepartureTime = value
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
