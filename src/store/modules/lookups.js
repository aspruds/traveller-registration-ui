import i18n from '@/plugins/i18n.js'
import isoCountries from '@/plugins/iso-countries'

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
  countries: Object.keys(isoCountries.getAlpha2Codes()).map(c => ({code: c})),
  identityDocumentTypes: [
    { code: "passport" },
    { code: "nationalIdCard" },
    { code: "other" }
  ],
});


const translateLookups = (lookups, translationPath) => {
  let path = translationPath + "."
  return lookups.map((lookup) => (
      {...lookup, 'name': i18n.t(path + lookup.code)})
  )
}

const translateCountry = code => (
    isoCountries.getName(code, i18n.locale)
)

const translateCountryCodes = countries => (
     countries
        .map(c => ({...c, name: translateCountry(c.code)}))
        .sort((a, b) => (a.name > b.name) ? 1 : -1)
)

const translatedState = () => {
  let state = initialState();
  return {
   carrierTypes: translateLookups(state.carrierTypes, "lookups.carrierTypes"),
   sexTypes: translateLookups(state.sexTypes, "lookups.sexTypes"),
   countries: translateCountryCodes(state.countries),
   identityDocumentTypes: translateLookups(state.identityDocumentTypes, "lookups.identityDocumentTypes")
  }
}

export default {
  namespaced: true,
  state: translatedState(),
  mutations: {
    updateTranslations(state) {
      Object.assign(state, translatedState())
    }
  },
  actions: {
    updateTranslations({commit}) {
      commit('updateTranslations')
    }
  },
  modules: {}
}
