<template>
  <div class="address">
    <v-select
        :value="address.countryCode"
        @change="setCountry({ id: address.id, value: $event })"
        :items="countries"
        :label="$t('travelDetails.address.country')"
        item-text="name"
        item-value="code"
        :rules="[validators.required]"
        required
    ></v-select>
    <v-text-field
        :value="address.zip"
        @change="setZip({ id: address.id, value: $event })"
        :label="$t('travelDetails.address.zip')"
        :rules="[validators.required]"
    ></v-text-field>
    <v-text-field
        :value="address.province"
        @change="setProvince({ id: address.id, value: $event })"
        :label="$t('travelDetails.address.province')"
        :rules="[validators.required]"
    ></v-text-field>
    <v-text-field
        :value="address.city"
        @change="setCity({ id: address.id, value: $event })"
        :label="$t('travelDetails.address.city')"
        :rules="[validators.required]"
    ></v-text-field>
    <v-text-field
        :value="address.district"
        @change="setDistrict({ id: address.id, value: $event })"
        :label="$t('travelDetails.address.district')"
        :rules="[validators.required]"
    ></v-text-field>
    <v-text-field
        :value="address.village"
        @change="setVillage({ id: address.id, value: $event })"
        :label="$t('travelDetails.address.village')"
        :rules="[validators.required]"
    ></v-text-field>
    <v-text-field
        :value="address.street"
        @change="setStreet({ id: address.id, value: $event })"
        :label="$t('travelDetails.address.street')"
        :rules="[validators.required]"
    ></v-text-field>
    <v-text-field
        :value="address.house"
        @change="setHouse({ id: address.id, value: $event })"
        :label="$t('travelDetails.address.house')"
        :rules="[validators.required]"
    ></v-text-field>
    <v-text-field
        :value="address.flat"
        @change="setFlat({ id: address.id, value: $event })"
        :label="$t('travelDetails.address.flat')"
        :rules="[validators.required]"
    ></v-text-field>
    <div class="buttons">
      <v-btn class="button" v-if="lastItem" small color="secondary" @click="addAddress(travellerId)">
        {{ $t('travelDetails.address.addAddress') }}
      </v-btn>
      <v-btn class="button" v-if="!onlyItem" small color="warning" @click="deleteAddress({ travellerId: travellerId, addressId: address.id })">
        {{ $t('travelDetails.address.removeAddress') }}
      </v-btn>
    </div>
  </div>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex'
import * as validators from "@/utils/validations/validators.js"

export default {
  name: 'Address',
  props: ['travellerId', 'address', 'addressIds', 'firstItem', 'lastItem', 'onlyItem'],
  methods: {
    ...mapMutations('registration/traveller/addresses', [
        'setCountry',
        'setZip',
        'setProvince',
        'setCity',
        'setDistrict',
        'setVillage',
        'setStreet',
        'setHouse',
        'setFlat',
        'addAddress',
        'deleteAddress',
    ]),
    ...mapActions('registration/traveller', ['addAddress', 'deleteAddress'])
  },
  computed: {
    validators: () => validators,
    addresses(){
      return this.addressIds.map(id => this.addresses[id]);
    },
    ...mapState('registration/traveller', ['addresses']),
    ...mapState('lookups', ['countries'])
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