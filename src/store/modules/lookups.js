import i18n from '@/i18n.js'

export default {
  namespaced: true,
  state: {
    carrierTypes: [
      { code: "plane", name: i18n.t("lookups.carrierTypes.plane")},
      { code: "bus", name: i18n.t("lookups.carrierTypes.bus")},
      { code: "ferry", name: i18n.t("lookups.carrierTypes.ferry")},
      { code: "other", name: i18n.t("lookups.carrierTypes.other")}
    ],
    sexTypes: [
      { code: "male", name: i18n.t("lookups.sexTypes.male")},
      { code: "female", name: i18n.t("lookups.sexTypes.female")},
      { code: "other", name: i18n.t("lookups.sexTypes.other")},
    ],
    countries: [
      { code: "lv", name: i18n.t("lookups.countries.lv")},
      { code: "zz", name: i18n.t("lookups.countries.zz")}
    ],
    identityDocumentTypes: [
      { code: "passport", name: i18n.t("lookups.identityDocumentTypes.passport")},
      { code: "nationalIdCard", name: i18n.t("lookups.identityDocumentTypes.nationalIdCard")},
      { code: "other", name: i18n.t("lookups.identityDocumentTypes.other")}
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
}
