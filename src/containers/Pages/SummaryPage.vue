<template>
  <div class="summary-page">
    <h1>Summary</h1>
    <Button @click="showConfirmation" :title="$t('travelDetails.continueButton')"/>
    <Button @click="showDepartedCountries" :title="$t('travelDetails.returnButton')"/>
  </div>
</template>

<script>
import Button from "@/components/Button";
export default {
  name: 'SummaryPage',
  components: {
    Button
  },
  methods: {
    showConfirmation() {
      if (this.$route.name !== 'ConfirmationPage') {
        this.$router.push({ name: 'ConfirmationPage' })
      }
    },
    showDepartedCountries() {
      if (this.$route.name !== 'DepartedCountriesPage') {
        this.$router.push({ name: 'DepartedCountriesPage' })
      }
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