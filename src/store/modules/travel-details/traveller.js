import {createTraveller} from "@/models/Traveller";
import { v4 as uuidv4 } from 'uuid';

const addTraveler = function (state) {
    const id = uuidv4();
    state.travellers = state.travellers || {};
    console.log(state.travellers)
    state.travellers[id] = createTraveller(id);

    state.travellerIds = state.travellerIds || [];
    state.travellerIds.push(id);
    return state;
};

const state = function (){
    return addTraveler({});
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
    setPhoneCountryCode(state, {id, value}) {
        state.travellers[id].contactInformation.phoneCountryCode = value;
    },
    setPhoneNumber(state, {id, value}) {
        state.travellers[id].contactInformation.phoneNumber = value;
    },
    setEmail(state, {id, value}) {
        state.travellers[id].contactInformation.email = value;
    }
};

export default {
    namespaced: true,
    state,
    mutations
}


/*
export default {
    namespaced: true,
    state: [
        {
            id: "46600ed2-d18e-4a70-9fe3-d6ea41e66fab",
            firstName: "John",
            lastName: "Brown",
            sex: "male",
            citizenship: "lv",
            nationalId: "230292-11902",
            dateOfBirth: "1992-02-23",
            identityDocumentType: "passport",
            identityDocumentNumber: "LV2300443",
            phoneCountryCode: "+371",
            phoneNumber: "29831232",
            email: "john.brown@schminbox.lv",
            addresses: [
                {
                    id: "1552a09c-1131-4e09-b527-43224b566812",
                    countryCode: "lv",
                    zip: "LV-1001",
                    province: "Līgatnes novads",
                    city: "Līgatne",
                    district: "Līgatnes pagasts",
                    village: "Līgatne",
                    street: "Raiskuma iela",
                    house: "21",
                    flat: "29B"
                }
            ],
            recentlyVisitedCountries: [
                {
                  id: "c6b8e778-9267-4fef-b104-36e5b9430081",
                  countryCode: "lv",
                  dateOfExit: "2020-02-02"
                },
            ]
        }
    ],
    mutations: {
        setFirstName(state, payload) {
            const pax = state.find(item => item.id === payload.id);
            Object.assign(pax, {...pax, firstName: payload.value});
        },
        setLastName(state, payload) {
            const pax = state.find(item => item.id === payload.id);
            Object.assign(pax, {...pax, lastName: payload.value});
        },
        setSex(state, payload) {
            const pax = state.find(item => item.id === payload.id);
            Object.assign(pax, {...pax, sex: payload.value});
        },
        setCitizenship(state, payload) {
            const pax = state.find(item => item.id === payload.id);
            Object.assign(pax, {...pax, citizenship: payload.value});
        },
        setNationalId(state, payload) {
            const pax = state.find(item => item.id === payload.id);
            Object.assign(pax, {...pax, nationalId: payload.value});
        },
        setDateOfBirth(state, payload) {
            const pax = state.find(item => item.id === payload.id);
            Object.assign(pax, {...pax, dateOfBirth: payload.value});
        },
        setIdentityDocumentType(state, payload) {
            const pax = state.find(item => item.id === payload.id);
            Object.assign(pax, {...pax, identityDocumentType: payload.value});
        },
        setIdentityDocumentNumber(state, payload) {
            const pax = state.find(item => item.id === payload.id);
            Object.assign(pax, {...pax, identityDocumentNumber: payload.value});
        },
        setPhoneCountryCode(state, payload) {
            const pax = state.find(item => item.id === payload.id);
            Object.assign(pax, {...pax, phoneCountryCode: payload.value});
        },
        setPhoneNumber(state, payload) {
            const pax = state.find(item => item.id === payload.id);
            Object.assign(pax, {...pax, phoneNumber: payload.value});
        },
        setEmail(state, payload) {
            const pax = state.find(item => item.id === payload.id);
            Object.assign(pax, {...pax, email: payload.value});
        },
    },
    actions: {},
    modules: {}
}
*/