import { Phone } from "@/models/Phone";
import Vue from 'vue'

const state = () => ({})

const mutations = {
    setPhoneCountryCode(state, {id, value}) {
        state[id].phoneCountryCode = value;
    },
    setPhoneNumber(state, {id, value}) {
        state[id].phoneNumber = value;
    },
    addPhone(state, id) {
        Vue.set(state, id, new Phone({id: id}));
    },
    deletePhone(state, id) {
        Vue.delete(state, id);
    },
};

export default {
    namespaced: true,
    state,
    mutations
}