import Vue from 'vue'
import {Address} from "@/models/Address";

const state = () => ({})

const mutations = {
    setCountry(state, {id, value}) {
        state[id].countryCode = value;
    },
    setZip(state, {id, value}) {
        state[id].zip = value;
    },
    setProvince(state, {id, value}) {
        state[id].province = value;
    },
    setCity(state, {id, value}) {
        state[id].city = value;
    },
    setDistrict(state, {id, value}) {
        state[id].district = value;
    },
    setVillage(state, {id, value}) {
        state[id].village = value;
    },
    setStreet(state, {id, value}) {
        state[id].street = value;
    },
    setHouse(state, {id, value}) {
        state[id].house = value;
    },
    setFlat(state, {id, value}) {
        state[id].flat = value;
    },
    addAddress(state, id) {
        Vue.set(state, id, new Address({id: id}));
    },
    deleteAddress(state, id) {
        Vue.delete(state, id);
    },
};

export default {
    namespaced: true,
    state,
    mutations
}
