import i18n from '@/plugins/i18n.js'

const initialState = () => ({
  carrierTypes: [
    { code: "plane" },
    { code: "bus" },
    { code: "ferry" },
    { code: "other" }
  ],
  sexTypes: [
    { code: "male" },
    { code: "female" },
    { code: "other" },
  ],
  countries: [
    { code: "lv" },
    { code: "zz" }
  ],
  identityDocumentTypes: [
    { code: "passport" },
    { code: "nationalIdCard" },
    { code: "other" }
  ],
});

const translateNames = (lookups, translationPath) => {
  let path = translationPath + "."
  return lookups.map((lookup) => (
      {...lookup, 'name': i18n.t(path + lookup.code)})
  )
}

const getters = {
  getCarrierTypes: (state) => (
    translateNames(state.carrierTypes, "lookups.carrierTypes")
  ),
  getSexTypes: (state) => (
      translateNames(state.sexTypes, "lookups.sexTypes")
  ),
  getCountries: (state) => (
      translateNames(state.countries, "lookups.countries")
  ),
  getIdentityDocumentTypes: (state) => (
      translateNames(state.identityDocumentTypes, "lookups.identityDocumentTypes")
  )
}

export default {
  namespaced: true,
  getters,
  state: initialState(),
  mutations: {},
  actions: {},
  modules: {}
}
