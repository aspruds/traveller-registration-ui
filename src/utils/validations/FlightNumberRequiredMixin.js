import i18n from '@/plugins/i18n';

var flightNumberRequiredMixin = {
    methods: {
        flightNumberRequired: flightNumber => {
            let pattern = /^[A-Z]{2}[0-9]{1,4}$/
            return pattern.test(flightNumber) || i18n.t('forms.validators.flightNumberRequired')
        }
    }
}
export default flightNumberRequiredMixin;
