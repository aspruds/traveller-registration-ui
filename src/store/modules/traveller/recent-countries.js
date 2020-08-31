import Vue from 'vue'
import {RecentCountry} from "@/models/RecentCountry";

const state = () => ({})

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
    mutations
}