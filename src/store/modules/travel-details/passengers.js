export default {
    namespaced: true,
    state: [
        {
            id: 1,
            firstName: "John",
            lastName: "Brown",
            sex: null,
            citizenshipCountry: null,
            dateOfBirth: null,
            dateOfBirthDialogVisible: false,
            identityDocumentType: null,
            identityDocumentNumber: null,
            email: null,
        },
        {
            id: 2,
            firstName: null,
            lastName: null,
            sex: null,
            citizenshipCountry: null,
            dateOfBirth: null,
            dateOfBirthDialogVisible: false,
            identityDocumentType: null,
            identityDocumentNumber: null,
            email: null,
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
    },
    actions: {},
    modules: {}
}
