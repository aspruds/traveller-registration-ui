<template>
  <div class="address">
    <v-select
        :value="address.countryCode"
        @change="setCountry({ id: address.id, value: $event })"
        :items="countries"
        :label="$t('travelDetails.address.country')"
        item-text="name"
        item-value="code"
        :rules="[v => !!v || $t('forms.fieldRequired')]"
        required
    ></v-select>
    <v-text-field
        :value="address.zip"
        @change="setZip({ id: address.id, value: $event })"
        :label="$t('travelDetails.address.zip')"
        :rules="[v => !!v || $t('forms.fieldRequired')]"
    ></v-text-field>
    <v-text-field
        :value="address.province"
        @change="setProvince({ id: address.id, value: $event })"
        :label="$t('travelDetails.address.province')"
        :rules="[v => !!v || $t('forms.fieldRequired')]"
    ></v-text-field>
    <v-text-field
        :value="address.city"
        @change="setCity({ id: address.id, value: $event })"
        :label="$t('travelDetails.address.city')"
        :rules="[v => !!v || $t('forms.fieldRequired')]"
    ></v-text-field>
    <v-text-field
        :value="address.district"
        @change="setDistrict({ id: address.id, value: $event })"
        :label="$t('travelDetails.address.district')"
        :rules="[v => !!v || $t('forms.fieldRequired')]"
    ></v-text-field>
    <v-text-field
        :value="address.village"
        @change="setVillage({ id: address.id, value: $event })"
        :label="$t('travelDetails.address.village')"
        :rules="[v => !!v || $t('forms.fieldRequired')]"
    ></v-text-field>
    <v-text-field
        :value="address.street"
        @change="setStreet({ id: address.id, value: $event })"
        :label="$t('travelDetails.address.street')"
        :rules="[v => !!v || $t('forms.fieldRequired')]"
    ></v-text-field>
    <v-text-field
        :value="address.house"
        @change="setHouse({ id: address.id, value: $event })"
        :label="$t('travelDetails.address.house')"
        :rules="[v => !!v || $t('forms.fieldRequired')]"
    ></v-text-field>
    <v-text-field
        :value="address.flat"
        @change="setFlat({ id: address.id, value: $event })"
        :label="$t('travelDetails.address.flat')"
        :rules="[v => !!v || $t('forms.fieldRequired')]"
    ></v-text-field>
    <div class="buttons">
      <v-btn class="button" v-if="lastItem" x-small color="secondary" @click="addAddress(travellerId)">
        {{ $t('travelDetails.address.addAddress') }}
      </v-btn>
      <v-btn class="button" v-if="!onlyItem" x-small color="warning" @click="deleteAddress({ travellerId: travellerId, id: address.id })">
        {{ $t('travelDetails.address.removeAddress') }}
      </v-btn>
    </div>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'

export default {
  name: 'Address',
  props: ['travellerId', 'address', 'firstItem', 'lastItem', 'onlyItem'],
  methods: {
    ...mapMutations('registration/traveller', [
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
    ])
  },
  computed: {
    traveller(){
      return this.travellers[this.travellerId]
    },
    addresses(){
      let addressIds = this.traveller().contactInformation.addresses;
      return addressIds.map(id => this.addresses[id]);
    },
    ...mapState('registration/traveller', ['travellers']),
    ...mapState('registration/traveller', ['addresses']),
    ...mapState('lookups', ['countries'])
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import '@/assets/styles/common.scss';

.buttons {
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