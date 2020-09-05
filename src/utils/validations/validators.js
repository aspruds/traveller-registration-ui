import i18n from '@/plugins/i18n';

export function fieldRequired(v) {
    v => !!v || i18n.t('forms.validators.fieldRequired')
}
var fieldRequiredMixin = {
    methods: {
        fieldRequired:
    }
}
export default fieldRequiredMixin;
