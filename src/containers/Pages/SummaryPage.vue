<template>
  <div class="summary-page">
    <h1>{{ $t('summary.pageTitle')}}</h1>
    <FormButtons>
      <v-btn class="button" @click="showConfirmation" color="primary">
        {{ $t('forms.buttons.continue') }}
      </v-btn>
      <v-btn class="button" @click="showTravelDetails">
        {{ $t('forms.buttons.return') }}
      </v-btn>
    </FormButtons>
  </div>
</template>

<script>
import {CONFIRMATION_PAGE, TRAVEL_DETAILS_PAGE} from "@/utils/router/routes";
import {pushRoute} from "@/utils/router/router-utils";
import FormButtons from "@/components/FormButtons";

export default {
  name: 'SummaryPage',
  components: {FormButtons},
  methods: {
    showConfirmation() {
      pushRoute(this.$router, this.$route, CONFIRMATION_PAGE)
    },
    showTravelDetails() {
      pushRoute(this.$router, this.$route, TRAVEL_DETAILS_PAGE)
    }
  },
}
</script>

<style lang="scss" rel="stylesheet/scss">
@import '@/assets/styles/common.scss';

.summary-page {
  padding: 0;
  margin: 0;
  @include media(">=phone") {
    padding: 10px 40px 40px 40px;
  }

  h1 {
    margin: 6px 0 12px 12px;
    font-size: em(30);
  }
}
</style>