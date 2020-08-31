import Vue from 'vue'
import {Address} from "@/models/Address";

const state = () => ({})

const mutations = {
    setCountry(state, {id, value}) {
        state.addresses[id].countryCode = value;
    },
    setZip(state, {id, value}) {
        state.addresses[id].zip = value;
    },
    setProvince(state, {id, value}) {
        state.addresses[id].province = value;
    },
    setCity(state, {id, value}) {
        state.addresses[id].city = value;
    },
    setDistrict(state, {id, value}) {
        state.addresses[id].district = value;
    },
    setVillage(state, {id, value}) {
        state.addresses[id].village = value;
    },
    setStreet(state, {id, value}) {
        state.addresses[id].street = value;
    },
    setHouse(state, {id, value}) {
        state.addresses[id].house = value;
    },
    setFlat(state, {id, value}) {
        state.addresses[id].flat = value;
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