import i18n from '@/plugins/i18n.js'
import {countryObjects} from '@/plugins/iso-countries'
import {IsolationRequirement} from "@/models/IsolationRequirement";
import {translateCountryCodes, translateLookups} from "@/utils/translation-utils";

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
  countries: countryObjects(),
  identityDocumentTypes: [
    { code: "passport" },
    { code: "nationalIdCard" },
    { code: "other" }
  ],
  isolationRequirements: [
    new IsolationRequirement({countryCode: "ES", validFrom: "2020-09-04", validTo: "2020-09-11", isolationRequired: false}),
    new IsolationRequirement({countryCode: "ES", validFrom: "2020-09-11", validTo: "2020-09-18", isolationRequired: true}),
    new IsolationRequirement({countryCode: "EE", validFrom: "2020-09-11", validTo: "2020-09-18", isolationRequired: true}),
    new IsolationRequirement({countryCode: "LT", validFrom: "2020-09-11", validTo: "2020-09-18", isolationRequired: false})
  ]
});

const translatedState = (i18n) => {
  let state = initialState();
  return {
   carrierTypes: translateLookups(state.carrierTypes, "lookups.carrierTypes", i18n),
   sexTypes: translateLookups(state.sexTypes, "lookups.sexTypes", i18n),
   countries: translateCountryCodes(state.countries, i18n),
   identityDocumentTypes: translateLookups(state.identityDocumentTypes, "lookups.identityDocumentTypes", i18n),
   isolationRequirements: state.isolationRequirements
  }
}

export default {
  namespaced: true,
  state: translatedState(i18n),
  mutations: {
    updateTranslations(state) {
      Object.assign(state, translatedState(i18n))
    }
  },
  actions: {
    updateTranslations({commit}) {
      commit('updateTranslations')
    }
  },
  modules: {}
}
