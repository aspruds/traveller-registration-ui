import isoCountries from "@/plugins/iso-countries";

export const translateLookups = (lookups, translationPath, i18n) => {
    let path = translationPath + "."
    return lookups.map((lookup) => ({...lookup, 'name': i18n.t(path + lookup.code)}))
}

export const translateCountryCode = (code, i18n) => (
    isoCountries.getName(code, i18n.locale)
)

export const translateCountryCodes = (countries, i18n) => {
    return countries
        .map(c => ({...c, name: translateCountryCode(c.code, i18n)}))
        .sort((a, b) => a.name.localeCompare(b.name, i18n.locale))
}