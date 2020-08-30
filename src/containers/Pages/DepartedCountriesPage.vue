<template>
  <div class="departed-countries-page">
    <h1>Departed Countries Page</h1>
    <v-btn @click="showSummary">{{ $t('travelDetails.continueButton') }}</v-btn>
    <v-btn @click="showTravelDetails">{{ $t('travelDetails.returnButton') }}</v-btn>
  </div>
</template>

<script>
import {SUMMARY_PAGE, TRAVEL_DETAILS_PAGE} from "@/utils/router/routes";
import {pushRoute} from "@/utils/router/router-utils";

export default {
  name: 'DepartedCountriesPage',
  methods: {
    showSummary() {
      pushRoute(this.$router, this.$route, SUMMARY_PAGE)
    },
    showTravelDetails() {
      pushRoute(this.$router, this.$route, TRAVEL_DETAILS_PAGE)
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
@import '@/assets/styles/common.scss';

.departed-countries-page {
  padding: 40px;
  margin: 0;

  h1 {
    margin: 0 0 12px 0;
    font-size: em(30);
  }
}
</style>

<i18n>
{
  "en": {
    "travelDetails": {
      "returnButton": "Return",
      "continueButton": "Continue"
    }
  },
  "lv": {
    "travelDetails": {
      "returnButton": "Atgriezties",
      "continueButton": "Turpināt"
    }
  }
}
</i18n>