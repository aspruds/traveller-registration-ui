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
        },
        {
            id: "dedba6de-ba9e-415a-a796-ae55feeb8bba",
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
