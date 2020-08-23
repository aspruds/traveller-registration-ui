<template>
  <div class="introduction">
    <h1>{{ $t('introduction.title') }}</h1>
    <div class="rules" v-html="$t('introduction.rules')"></div>
    <div class="controls">
      <v-checkbox
          v-model="agreedToRules"
          :label="$t('introduction.agreeToRules')">
      </v-checkbox>
      <div class="buttons">
        <v-btn :disabled="!agreedToRules" class="button" @click="showTravelDetails()" color="primary">
          {{ $t('forms.buttons.start') }}
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import {createHelpers} from "vuex-map-fields";
import store from '@/store/index';
import { introduction } from '@/store/modules/introduction';

if (!store.state.introduction) store.registerModule(`introduction`, introduction);

const { mapFields } = createHelpers({
  getterType: 'introduction/getField',
  mutationType: 'introduction/updateField',
});

export default {
  name: 'Introduction',
  methods: {
    showTravelDetails() {
      if (this.$route.name !== 'TravelDetailsPage') {
        this.$router.push({ name: 'TravelDetailsPage' })
      }
    },
  },
  computed: {
    ...mapFields(['agreedToRules']),
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
@import '@/assets/styles/common.scss';

.introduction {
  margin-bottom: 40px;

  h1 {
    margin: 0 0 12px 0;
    font-size: em(30);
  }

  .rules {
    ::v-deep p {
      text-align: justify;
    }
  }

  .controls {
    margin-top: 25px;
  }

  .buttons {
    @include media(">=phone") {
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
