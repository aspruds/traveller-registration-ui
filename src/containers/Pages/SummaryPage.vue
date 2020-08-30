<template>
  <div class="summary-page">
    <h1>Summary</h1>
    <v-btn @click="showConfirmation" :title="$t('travelDetails.continueButton')"/>
    <v-btn @click="showDepartedCountries" :title="$t('travelDetails.returnButton')"/>
  </div>
</template>

<script>
import {CONFIRMATION_PAGE, DEPARTED_COUNTRIES_PAGE} from "@/utils/router/routes";
import {pushRoute} from "@/utils/router/router-utils";

export default {
  name: 'SummaryPage',
  methods: {
    showConfirmation() {
      pushRoute(this.$router, this.$route, CONFIRMATION_PAGE)
    },
    showDepartedCountries() {
      pushRoute(this.$router, this.$route, DEPARTED_COUNTRIES_PAGE)
    }
  },
}
</script>

<style lang="scss" rel="stylesheet/scss">
@import '@/assets/styles/common.scss';

.summary-page {
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