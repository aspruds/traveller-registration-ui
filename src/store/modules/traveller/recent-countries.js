import Vue from 'vue'
import {RecentCountry} from "@/models/RecentCountry";
import shouldIsolate from "@/utils/isolation/isolation-utils";

const state = () => ({})

const getters = {
    isolationRequired (state, getters, rootState) {
        return Object.values(state).some(c =>
            c.countryCode !== '' && c.dateOfExit !== '' &&
            shouldIsolate(rootState.lookups.isolationRequirements, c.countryCode, c.dateOfExit)
        )
    },
}

const mutations = {
    setCountryCode(state, {id, value}) {
        state[id].countryCode = value;
    },
    setDateOfExit(state, {id, value}) {
        state[id].dateOfExit = value;
    },
    addRecentCountry(state, id) {
        Vue.set(state, id, new RecentCountry({id: id}));
    },
    deleteRecentCountry(state, id) {
        Vue.delete(state, id);
    },
};

export default {
    namespaced: true,
    state,
    getters,
    mutations
}