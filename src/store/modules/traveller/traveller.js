import { v4 as uuidv4 } from 'uuid';
import { Traveller } from "@/models/Traveller";
import phones from './phones'
import addresses from './addresses'
import recentCountries from './recent-countries'
import Vue from 'vue'

const addTraveler = function (state, id) {
    Vue.set(state.travellers, id, new Traveller({id: id}));

    state.travellerIds = state.travellerIds || [];
    state.travellerIds.push(id);
};

const initialState = function (){
    let state = {
        initialized: false,
        travellers: {},
        travellerIds: []
    }

    let travellerId = uuidv4()
    addTraveler(state, travellerId);

    return state
};

const mutations = {
    setInitialized(state, value) {
        state.initialized = value;
    },
    setFirstName(state, {id, value}) {
        state.travellers[id].firstName = value;
    },
    setLastName(state, {id, value}) {
        state.travellers[id].lastName = value;
    },
    setSex(state, {id, value}) {
        state.travellers[id].sex = value;
    },
    setCitizenship(state, {id, value}) {
        state.travellers[id].citizenship = value;
    },
    setNationalId(state, {id, value}) {
        state.travellers[id].nationalId = value;
    },
    setDateOfBirth(state, {id, value}) {
        state.travellers[id].dateOfBirth = value;
    },
    setIdentityDocumentType(state, {id, value}) {
        state.travellers[id].identityDocument.documentType = value;
    },
    setIdentityDocumentNumber(state, {id, value}) {
        state.travellers[id].identityDocument.documentNumber = value;
    },
    setEmail(state, {id, value}) {
        state.travellers[id].contactInformation.email = value;
    },
    setSeat(state, {id, value}) {
        state.travellers[id].seat = value;
    },
    addPhoneId(state, {travellerId, phoneId}) {
        let contactInfo = state.travellers[travellerId].contactInformation;
        contactInfo.phones.push(phoneId);
    },
    deletePhoneId(state, {travellerId, phoneId}) {
        let contactInfo = state.travellers[travellerId].contactInformation;
        contactInfo.phones = contactInfo.phones.filter(v => v !== phoneId)
    },
    addAddressId(state, {travellerId, addressId}) {
        let contactInfo = state.travellers[travellerId].contactInformation;
        contactInfo.addresses.push(addressId);
    },
    deleteAddressId(state, {travellerId, addressId}) {
        let contactInfo = state.travellers[travellerId].contactInformation;
        contactInfo.addresses = contactInfo.addresses.filter(v => v !== addressId);
    },
    addRecentCountryId(state, {travellerId, recentCountryId}) {
        let recentCountries = state.travellers[travellerId].recentCountries;
        recentCountries.push(recentCountryId);
    },
    deleteRecentCountryId(state, {travellerId, recentCountryId}) {
        let traveller = state.travellers[travellerId];
        traveller.recentCountries = traveller.recentCountries.filter(v => v !== recentCountryId);
    },
};

const getters = {
    travellerById: (state => (id) => (
        state.travellers[id]
    ))
}

const modules = {
    phones,
    addresses,
    recentCountries
}

const actions = {
    addPhone({commit}, travellerId) {
        let phoneId = uuidv4()
        commit('addPhoneId', {travellerId, phoneId})
        commit('registration/traveller/phones/addPhone', phoneId, { root: true })
    },
    deletePhone({commit}, {travellerId, phoneId}) {
        commit('deletePhoneId', {travellerId, phoneId})
        commit('registration/traveller/phones/deletePhone', phoneId, { root: true })
    },
    addAddress({commit}, travellerId) {
        let addressId = uuidv4()
        commit('addAddressId', {travellerId, addressId})
        commit('registration/traveller/addresses/addAddress', addressId, { root: true })
    },
    deleteAddress({commit}, {travellerId, addressId}) {
        commit('deleteAddressId', {travellerId, addressId})
        commit('registration/traveller/addresses/deleteAddress', addressId, { root: true })
    },
    addRecentCountry({commit}, travellerId) {
        let recentCountryId = uuidv4()
        commit('addRecentCountryId', {travellerId, recentCountryId})
        commit('registration/traveller/recentCountries/addRecentCountry', recentCountryId, { root: true })
    },
    deleteRecentCountry({commit}, {travellerId, recentCountryId}) {
        commit('deleteRecentCountryId', {travellerId, recentCountryId})
        commit('registration/traveller/recentCountries/deleteRecentCountry', recentCountryId, { root: true })
    },
    initialize({dispatch, state, commit}, travellerId) {
        if(!state.initialized) {
            dispatch('addPhone', travellerId)
            dispatch('addAddress', travellerId)
            dispatch('addRecentCountry', travellerId)
            commit('setInitialized', true)
        }
    }
}

export default {
    namespaced: true,
    state: initialState,
    mutations,
    getters,
    modules,
    actions
}