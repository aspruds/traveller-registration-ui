export default {
    namespaced: true,
    state: [
        {
            id: 1,
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
        },
        {
            id: 2,
            firstName: null,
            lastName: null,
            sex: null,
            citizenship: null,
            nationalId: null,
            dateOfBirth: null,
            identityDocumentType: null,
            identityDocumentNumber: null,
            phoneCountryCode: null,
            phoneNumber: null,
            email: null
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
