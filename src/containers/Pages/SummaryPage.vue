<template>
  <div class="summary-page">
    <h1>Summary</h1>
    <div class="buttons">
      <v-btn class="button" @click="showConfirmation" color="primary">
        {{ $t('forms.buttons.continue') }}
      </v-btn>
      <v-btn class="button" @click="showTravelDetails">
        {{ $t('forms.buttons.return') }}
      </v-btn>
    </div>
  </div>
</template>

<script>
import {CONFIRMATION_PAGE, TRAVEL_DETAILS_PAGE} from "@/utils/router/routes";
import {pushRoute} from "@/utils/router/router-utils";

export default {
  name: 'SummaryPage',
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

  .buttons {
    margin-left: 15px;
    margin-right: 15px;
    margin-top: 20px;

    @include media(">=phone") {
      margin-left: 0;
      margin-right: 0;
      margin-top: 30px;
      display: flex;
    }
  }

  .button {
    display: block;
    width: 100%;
    margin-bottom: 15px;

    @include media(">=phone") {
      width: auto;
      margin-bottom: 0;
      margin-right: 10px;
    }
  }
}
</style>