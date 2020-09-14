import countries from 'i18n-iso-countries'
import en from 'i18n-iso-countries/langs/en.json'
import lv from 'i18n-iso-countries/langs/lv.json'

export const countryObjects = () => (
    Object
        .keys(countries.getAlpha2Codes())
        .map(c => ({code: c}))
)

countries.registerLocale(en)
countries.registerLocale(lv)
export default countries