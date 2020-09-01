import i18n from '@/plugins/i18n';

var fieldRequiredMixin = {
    methods: {
        fieldRequired: v => !!v || i18n.t('forms.validators.fieldRequired')
    }
}
export default fieldRequiredMixin;
