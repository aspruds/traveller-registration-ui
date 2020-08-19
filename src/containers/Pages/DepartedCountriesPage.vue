<template>
  <div class="departed-countries-page">
    <h1>Departed Countries Page</h1>
    <Button @click="showSummary" :title="$t('travelDetails.continueButton')"/>
    <Button @click="showTravelDetails" :title="$t('travelDetails.returnButton')"/>
  </div>
</template>

<script>
import Button from "@/components/Button";

export default {
  name: 'DepartedCountriesPage',
  components: {
    Button
  },
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