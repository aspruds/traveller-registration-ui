import i18n from '@/plugins/i18n';

var nationalIdNumberRequiredMixin = {
    methods: {
        nationalIdNumberRequired: nationalIdNumber => {
            let pattern = /^[0-9]{6}-[0-9]{5}$/
            return pattern.test(nationalIdNumber) || i18n.t('forms.validators.nationalIdNumberRequired')
        }
    }
}
export default nationalIdNumberRequiredMixin;
