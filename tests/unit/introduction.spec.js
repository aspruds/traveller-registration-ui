import {expect} from 'chai'
import {createLocalVue, shallowMount} from '@vue/test-utils'
import Introduction from '@/components/IntroductionPage/Introduction'
import Vuex from 'vuex'
import VueI18n from 'vue-i18n'
import i18n from "@/plugins/i18n";
import {introduction} from "@/store/modules/introduction";
import {cloneDeep} from "lodash";
import VBtn from "vuetify/lib/components/VBtn";

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueI18n)

describe('Introduction.vue', () => {
    // create a deep clone of store
    const introductionStore = () => new Vuex.Store({
            modules: {
                introduction: cloneDeep(introduction)
            }
        }
    )

    it('agreedToRules is disabled by default', () => {
        const store = introductionStore()
        const wrapper = shallowMount(Introduction, {
            localVue,
            i18n,
            store
        })
        expect(wrapper.vm.agreedToRules).to.be.false;
        expect(wrapper.findComponent(VBtn).attributes('disabled')).to.eql('true');
    })

    it('next button should be enabled if agreedToRules is true', () => {
        const store = introductionStore()
        store.state.introduction.agreedToRules = true;

        const wrapper = shallowMount(Introduction, {
            localVue,
            i18n,
            store
        })
        expect(wrapper.vm.agreedToRules).to.be.true;
        expect(wrapper.findComponent(VBtn).attributes('disabled')).to.be.undefined
    })
})
