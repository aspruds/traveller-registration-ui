import i18n from '@/plugins/i18n';

var emailRequiredMixin = {
    methods: {
        emailRequired: email => {
            let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            return pattern.test(email) || i18n.t('forms.validators.emailRequired')
        }
    }
}
export default emailRequiredMixin;
