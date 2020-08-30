import Vue from 'vue'
import VueRouter from  'vue-router'
import IntroductionPage from '@/containers/Pages/IntroductionPage.vue'
import TravelDetailsPage from "@/containers/Pages/TravelDetailsPage";
import DepartedCountriesPage from "@/containers/Pages/DepartedCountriesPage";
import SummaryPage from "@/containers/Pages/SummaryPage";
import ConfirmationPage from "@/containers/Pages/ConfirmationPage";
import {
    CONFIRMATION_PAGE,
    DEPARTED_COUNTRIES_PAGE,
    INTRODUCTION_PAGE,
    SUMMARY_PAGE,
    TRAVEL_DETAILS_PAGE
} from "@/utils/router/routes";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: INTRODUCTION_PAGE,
        component: IntroductionPage
    },
    {
        path: '/travel-details',
        name: TRAVEL_DETAILS_PAGE,
        component: TravelDetailsPage
    },
    {
        path: '/departed-countries',
        name: DEPARTED_COUNTRIES_PAGE,
        component: DepartedCountriesPage
    },
    {
        path: '/summary',
        name: SUMMARY_PAGE,
        component: SummaryPage
    },
    {
        path: '/confirmation',
        name: CONFIRMATION_PAGE,
        component: ConfirmationPage
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router