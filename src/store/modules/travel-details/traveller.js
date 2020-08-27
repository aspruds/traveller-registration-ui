import { v4 as uuidv4 } from 'uuid';
import { RecentCountry } from "@/models/RecentCountry";
import { Traveller } from "@/models/Traveller";
import { Phone } from "@/models/Phone";
import { Address } from "@/models/Address";
import Vue from 'vue'

const addTraveler = function (state, id) {
    Vue.set(state.travellers, id, new Traveller({id: id}));

    state.travellerIds = state.travellerIds || [];
    state.travellerIds.push(id);
};

const addPhone = function (state, travellerId) {
    const id = uuidv4();
    Vue.set(state.phones, id, new Phone({id: id}));

    let contactInfo = state.travellers[travellerId].contactInformation;
    contactInfo.phones.push(id)
};

const addAddress = function (state, travellerId) {
    const id = uuidv4();
    Vue.set(state.addresses, id, new Address({id: id}));

    let contactInfo = state.travellers[travellerId].contactInformation;
    contactInfo.addresses.push(id)
};

const addRecentCountry = function (state, travellerId) {
    const id = uuidv4();
    state.recentCountries[id] = new RecentCountry({id: id});

    let traveler = state.travellers[travellerId];
    traveler.recentCountries = traveler.recentCountries || [];
    traveler.recentCountries.push(id)
};

const initialState = function (){
    let state = {
        travellers: {},
        travellerIds: [],
        phones: {},
        addresses: {},
        recentCountries: {}
    }

    let travellerId = uuidv4()
    addTraveler(state, travellerId);
    addPhone(state, travellerId)
    addAddress(state, travellerId)
    addRecentCountry(state, travellerId)

    return state
};

const mutations = {
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
    setPhoneCountryCode(state, {id, value}) {
        state.phones[id].phoneCountryCode = value;
    },
    setPhoneNumber(state, {id, value}) {
        state.phones[id].phoneNumber = value;
    },
    addPhone(state, travellerId) {
        addPhone(state, travellerId);
    },
    deletePhone(state, {travellerId, id}) {
        let contactInfo = state.travellers[travellerId].contactInformation;
        contactInfo.phones = contactInfo.phones.filter(v => v !== id)
        Vue.delete(state.phones, id);
    },
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
    addAddress(state, travellerId) {
        addAddress(state, travellerId);
    },
    deleteAddress(state, {travellerId, id}) {
        let contactInfo = state.travellers[travellerId].contactInformation;
        contactInfo.addresses = contactInfo.addresses.filter(v => v !== id)
        Vue.delete(state.addresses, id);
    },
};

const getters = {
    travellerById: (state => (id) => (
        state.travellers[id]
    ))
}

export default {
    namespaced: true,
    state: initialState,
    mutations,
    getters
}