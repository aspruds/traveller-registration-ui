<template>
  <div class="travel-details-page">
    <h1>Travel Details</h1>
    <Button @click="showDepartedCountries" :title="$t('travelDetails.continueButton')"/>
    <Button @click="showIntroduction" :title="$t('travelDetails.returnButton')"/>
  </div>
</template>

<script>
import Button from "@/components/Button";
export default {
  name: 'TravelDetailsPage',
  components: {
    Button
  },
  methods: {
    showIntroduction() {
      if (this.$route.name !== 'IntroPage') {
        this.$router.push({ name: 'IntroPage' })
      }
    },
    showDepartedCountries() {
      if (this.$route.name !== 'DepartedCountriesPage') {
        this.$router.push({ name: 'DepartedCountriesPage' })
      }
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
@import '@/assets/styles/common.scss';

.travel-details-page {
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