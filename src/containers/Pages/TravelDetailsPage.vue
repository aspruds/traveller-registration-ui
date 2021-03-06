<template>
  <div class="travel-details-page">
    <h1>{{ $t('travelDetails.pageTitle')}}</h1>

    <v-form ref="form" v-model="valid">
    <TransportDetailsForm :title="$t('travelDetails.subtitles.carrierDetails')"/>
    <TravellerDetailsForm :title="$t('travelDetails.subtitles.passengerDetails')"
                          :travellerId="travellerId"
                          v-for="travellerId in travellerIds"
                          :key="travellerId"></TravellerDetailsForm>
    </v-form>
    <FormButtons>
      <v-btn class="button" @click="showSummary" color="primary">
        {{ $t('forms.buttons.continue') }}
      </v-btn>
      <v-btn class="button" @click="showIntroduction">
        {{ $t('forms.buttons.return') }}
      </v-btn>
    </FormButtons>
  </div>
</template>

<script>
import TransportDetailsForm from "@/components/TravelDetailsPage/TransportDetailsForm";
import TravellerDetailsForm from "@/components/TravelDetailsPage/TravellerDetailsForm";

import store from '@/store/index';
import { registration } from '@/store/modules/registration';
import {mapState} from "vuex";
import {INTRODUCTION_PAGE, SUMMARY_PAGE} from "@/utils/router/routes";
import {pushRoute} from "@/utils/router/router-utils";
import FormButtons from "@/components/FormButtons";

if (!store.state.registration) store.registerModule(`registration`, registration);

export default {
  name: 'TravelDetailsPage',
  components: {
    FormButtons,
    TravellerDetailsForm,
    TransportDetailsForm
  },
  data: function() {
    return {
      valid: true
    }
  },
  methods: {
    scrollToError() {
      this.$nextTick(() => {
        const el = document.querySelector(".v-input.error--text")
        if(el != null) {
          el.scrollIntoView()
        }
      })
    },
    showIntroduction() {
      pushRoute(this.$router, this.$route, INTRODUCTION_PAGE)
    },
    showSummary() {
      this.$refs.form.validate();
      if(this.valid) {
        pushRoute(this.$router, this.$route, SUMMARY_PAGE)
      } else {
        this.scrollToError()
      }
    }
  },
  computed: {
    ...mapState('registration/traveller', ['travellerIds']),
  },
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
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

  ::v-deep .form-block {
    margin-bottom: 15px;
    &.v-sheet {
      background: $color-form-block-bg;
    }
  }
}
</style>