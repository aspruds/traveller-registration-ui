<template>
  <div class="departed-countries-page">
    <h1>Departed Countries Page</h1>
    <v-btn @click="showSummary">{{ $t('travelDetails.continueButton') }}</v-btn>
    <v-btn @click="showTravelDetails">{{ $t('travelDetails.returnButton') }}</v-btn>
  </div>
</template>

<script>
export default {
  name: 'DepartedCountriesPage',
  methods: {
    showSummary() {
      if (this.$route.name !== 'SummaryPage') {
        this.$router.push({name: 'SummaryPage'})
      }
    },
    showTravelDetails() {
      if (this.$route.name !== 'TravelDetailsPage') {
        this.$router.push({name: 'TravelDetailsPage'})
      }
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