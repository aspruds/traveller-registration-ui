import Vue from 'vue'
import VueRouter from  'vue-router'
import IntroductionPage from '@/containers/Pages/IntroductionPage.vue'
import TravelDetailsPage from "@/containers/Pages/TravelDetailsPage";
import DepartedCountriesPage from "@/containers/Pages/DepartedCountriesPage";
import SummaryPage from "@/containers/Pages/SummaryPage";
import ConfirmationPage from "@/containers/Pages/ConfirmationPage";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "IntroductionPage",
        component: IntroductionPage
    },
    {
        path: '/travel-details',
        name: 'TravelDetailsPage',
        component: TravelDetailsPage
    },
    {
        path: '/departed-countries',
        name: 'DepartedCountriesPage',
        component: DepartedCountriesPage
    },
    {
        path: '/summary',
        name: 'SummaryPage',
        component: SummaryPage
    },
    {
        path: '/confirmation',
        name: 'ConfirmationPage',
        component: ConfirmationPage
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router