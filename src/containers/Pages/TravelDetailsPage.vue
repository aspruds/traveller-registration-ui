<template>
  <div class="travel-details-page">
    <h1>{{ $t('travelDetails.pageTitle')}}</h1>

    <TransportDetailsForm :title="$t('travelDetails.subtitles.carrierDetails')"/>
    <TravellerDetailsForm :title="$t('travelDetails.subtitles.passengerDetails')"
                          :travellerId="travellerId"
                          v-for="travellerId in travellerIds"
                          :key="travellerId"></TravellerDetailsForm>

    <div class="buttons">
      <v-btn class="button" @click="showDepartedCountries" color="primary">
        {{ $t('forms.buttons.continue') }}
      </v-btn>
      <v-btn class="button" @click="showIntroduction">
        {{ $t('forms.buttons.return') }}
      </v-btn>
    </div>
  </div>
</template>

<script>
import TransportDetailsForm from "@/components/TravelDetailsPage/TransportDetailsForm";
import TravellerDetailsForm from "@/components/TravelDetailsPage/TravellerDetailsForm";

import store from '@/store/index';
import { registration } from '@/store/modules/registration';
import {mapState} from "vuex";

if (!store.state.registration) store.registerModule(`registration`, registration);

export default {
  name: 'TravelDetailsPage',
  components: {
    TravellerDetailsForm,
    TransportDetailsForm
  },
  methods: {
    showIntroduction() {
      if (this.$route.name !== 'IntroductionPage') {
        this.$router.push({ name: 'IntroductionPage' })
      }
    },
    showDepartedCountries() {
      if (this.$route.name !== 'DepartedCountriesPage') {
        this.$router.push({ name: 'DepartedCountriesPage' })
      }
    }
  },
  computed: {
    ...mapState('registration/traveller', ['travellerIds']),
  },
}
</script>

<style lang="scss" rel="stylesheet/scss">
@import '@/assets/styles/common.scss';

.travel-details-page {
  padding: 0;
  margin: 0;
  @include media(">=phone") {
    padding: 10px 40px 40px 40px;
  }

  h1 {
    margin: 6px 0 12px 12px;
    font-size: em(30);
  }

  .form-block {
    margin-bottom: 15px;
    &.v-sheet {
      background: $color-form-block-bg;
    }
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