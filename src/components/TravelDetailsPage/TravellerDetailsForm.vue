<template>
  <div class="passenger-details">
    <v-card :class="$vuetify.breakpoint.smAndUp ? 'elevation-1' : 'elevation-0'" class="form-block mx-auto">
      <v-card-title>{{ title }}</v-card-title>
      <v-card-text>
        <v-text-field
            v-model="traveller.firstName"
            :label="$t('travelDetails.passengerDetails.firstName')"
            :rules="[v => !!v || $t('forms.fieldRequired')]"
        ></v-text-field>
        <v-text-field
            v-model="traveller.lastName"
            :label="$t('travelDetails.passengerDetails.lastName')"
            :rules="[v => !!v || $t('forms.fieldRequired')]"
        ></v-text-field>
        <v-select
            v-model="traveller.sex"
            :items="sexTypes"
            :label="$t('travelDetails.passengerDetails.sex')"
            item-text="name"
            item-value="code"
            :rules="[v => !!v || $t('forms.fieldRequired')]"
            required
        ></v-select>
        <v-select
            v-model="traveller.citizenship"
            :items="countries"
            :label="$t('travelDetails.passengerDetails.citizenship')"
            item-text="name"
            item-value="code"
            :rules="[v => !!v || $t('forms.fieldRequired')]"
            required
        ></v-select>
        <v-text-field
            v-model="traveller.nationalId"
            :label="$t('travelDetails.passengerDetails.nationalId')"
            v-if="traveller.citizenship === 'lv'"
            :rules="[v => !!v || $t('forms.fieldRequired')]"
        ></v-text-field>
        <v-dialog
            ref="dateOfBirthDialog"
            v-model="dateOfBirthDialogVisible"
            :return-value.sync="traveller.dateOfBirth"
            persistent
            width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
                v-model="traveller.dateOfBirth"
                :label="$t('travelDetails.passengerDetails.dateOfBirth')"
                readonly
                v-bind="attrs"
                v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker :locale="$i18n.locale" v-model="traveller.dateOfBirth" scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="dateOfBirthDialogVisible = false">
              {{ $t('forms.buttons.cancel') }}
            </v-btn>
            <v-btn text color="primary" @click="$refs.dateOfBirthDialog.save(traveller.dateOfBirth)">
              {{ $t('forms.buttons.confirm') }}
            </v-btn>
          </v-date-picker>
        </v-dialog>
        <v-divider></v-divider>
        <v-select
            v-model="traveller.identityDocument.documentType"
            :items="identityDocumentTypes"
            item-text="name"
            item-value="code"
            :rules="[v => !!v || $t('forms.fieldRequired')]"
            :label="$t('travelDetails.passengerDetails.identityDocumentType')"
            required
        ></v-select>
        <v-text-field
            v-model="traveller.identityDocument.documentNumber"
            :label="$t('travelDetails.passengerDetails.identityDocumentNumber')"
            :rules="[v => !!v || $t('forms.fieldRequired')]"
        ></v-text-field>
        <v-divider></v-divider>
        <v-container class="d-flex pa-0">
          <v-text-field
              v-model="traveller.contactInformation.phoneCountryCode"
              class="pe-8 flex-grow-0"
              :label="$t('travelDetails.passengerDetails.phoneCountryCode')"
              :rules="[v => !!v || $t('forms.fieldRequired')]"
          ></v-text-field>
          <v-text-field
              v-model="traveller.contactInformation.phoneNumber"
              class="flex-grow-1"
              :label="$t('travelDetails.passengerDetails.phoneNumber')"
              single-line
              :rules="[v => !!v || $t('forms.fieldRequired')]"
          ></v-text-field>
        </v-container>
        <v-text-field
            v-model="traveller.contactInformation.email"
            @change="setEmail({ id: travellerId, value: $event })"
            :label="$t('travelDetails.passengerDetails.email')"
            :rules="[v => !!v || $t('forms.fieldRequired')]"
        ></v-text-field>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'

export default {
  name: 'TravellerDetailsForm',
  props: ['title', 'travellerId'],
  data: function () {
    return {
      dateOfBirthDialogVisible: false
    }
  },
  methods: {
    ...mapMutations('registration/traveller', ['setEmail'])
  },
  computed: {
    traveller(){
      return this.travellers[this.travellerId]
    },
    ...mapState('registration/traveller', ['travellers']),
    ...mapState('lookups', ['sexTypes','identityDocumentTypes', 'countries'])
  }
}
</script>