import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify)

export default new Vuetify({
    theme: {
        options: { variations: false },
        themes: {
            light: {
                primary: '#1867C0',
                accent: '#005CAF',
            },
        },
    },
})
