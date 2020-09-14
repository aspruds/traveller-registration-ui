import i18n from '@/plugins/i18n';

export function required(v) {
    return  !!v || i18n.t('forms.validators.fieldRequired')
}

export function nationalIdNumber(nationalIdNumber) {
    let pattern = /^[0-9]{6}-[0-9]{5}$/
    return pattern.test(nationalIdNumber) || i18n.t('forms.validators.nationalIdNumberRequired')
}

export function flightNumber(flightNumber) {
    let pattern = /^[A-Z]{2}[0-9]{1,4}$/
    return pattern.test(flightNumber) || i18n.t('forms.validators.flightNumberRequired')
}

export function name(name) {
    let pattern = /^[A-Za-z'\- ]+$/
    return pattern.test(name) || i18n.t('forms.validators.nameRequired')
}

export function email(email) {
    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return pattern.test(email) || i18n.t('forms.validators.emailRequired')
}

export function phoneCountryCode(input) {
    let pattern = /^\+[0-9 ]+$/
    return pattern.test(input) || i18n.t('forms.validators.phoneCountryCodeRequired')
}

export function phoneNumber(input) {
    let pattern = /^[0-9][0-9 ]+$/
    return pattern.test(input) || i18n.t('forms.validators.phoneNumberRequired')
}