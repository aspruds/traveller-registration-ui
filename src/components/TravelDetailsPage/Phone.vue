<template>
  <div class="phone">
    <v-container class="pa-0 d-flex">
      <v-text-field
          :value="phone.phoneCountryCode"
          @change="setPhoneCountryCode({ id: phone.id, value: $event })"
          class="pe-8 flex-grow-0"
          :label="$t('travelDetails.passengerDetails.phoneCountryCode')"
          :rules="[validators.required]"
      ></v-text-field>
      <v-text-field
          :value="phone.phoneNumber"
          @change="setPhoneNumber({ id: phone.id, value: $event })"
          class="flex-grow-1"
          :label="$t('travelDetails.passengerDetails.phoneNumber')"
          :rules="[validators.required]"
      ></v-text-field>
    </v-container>
    <div class="buttons">
      <v-btn class="button" v-if="lastItem" small color="secondary" @click="addPhone(travellerId)">
        {{ $t('travelDetails.phone.addPhone') }}
      </v-btn>
      <v-btn class="button" v-if="!onlyItem" small color="warning" @click="deletePhone({ travellerId: travellerId, phoneId: phone.id })">
        {{ $t('travelDetails.phone.removePhone') }}
      </v-btn>
    </div>
  </div>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex'
import * as validators from "@/utils/validations/validators.js"

export default {
  name: 'Phone',
  props: ['travellerId', 'phone', 'phoneIds', 'firstItem', 'lastItem', 'onlyItem'],
  methods: {
    ...mapMutations('registration/traveller/phones', [
        'setPhoneCountryCode',
        'setPhoneNumber'
    ]),
    ...mapActions('registration/traveller', ['addPhone', 'deletePhone'])
  },
  computed: {
    validators: () => validators,
    phones(){
      return this.phoneIds.map(id => this.phones[id]);
    },
    ...mapState('registration/traveller/phones', ['phones']),
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import '@/assets/styles/common.scss';

.buttons {
  margin-top: 5px;
  @include media(">=phone") {
    margin-left: 0;
    margin-right: 0;
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
</style>