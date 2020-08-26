<template>
  <div class="phone">
    <v-container class="d-flex pa-0">
      <v-text-field
          :value="phone.phoneCountryCode"
          @change="setPhoneCountryCode({ id: phone.id, value: $event })"
          class="pe-8 flex-grow-0"
          :label="$t('travelDetails.passengerDetails.phoneCountryCode')"
          :rules="[v => !!v || $t('forms.fieldRequired')]"
      ></v-text-field>
      <v-text-field
          :value="phone.phoneNumber"
          @change="setPhoneNumber({ id: phone.id, value: $event })"
          class="flex-grow-1"
          :label="$t('travelDetails.passengerDetails.phoneNumber')"
          single-line
          :rules="[v => !!v || $t('forms.fieldRequired')]"
      ></v-text-field>
    </v-container>
    <v-btn v-if="!lastItem" x-small color="warning" @click="deletePhone({ travellerId: travellerId, id: phone.id })">
      {{ $t('travelDetails.phone.removePhone') }}
    </v-btn>
    <v-btn v-if="lastItem" x-small color="secondary" @click="addPhone(travellerId)">
      {{ $t('travelDetails.phone.addPhone') }}
    </v-btn>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'

export default {
  name: 'Phone',
  props: ['travellerId', 'phone', 'lastItem'],
  methods: {
    ...mapMutations('registration/traveller', [
        'setPhoneCountryCode',
        'setPhoneNumber',
        'addPhone',
        'deletePhone',
    ])
  },
  computed: {
    traveller(){
      return this.travellers[this.travellerId]
    },
    phones(){
      let phoneIds = this.traveller().contactInformation.phones;
      return phoneIds.map(id => this.phones[id]);
    },
    ...mapState('registration/traveller', ['travellers']),
    ...mapState('registration/traveller', ['phones']),
  }
}
</script>