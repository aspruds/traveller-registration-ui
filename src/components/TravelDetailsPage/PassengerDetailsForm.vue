<template>
  <div class="passenger-details">
    <v-card :class="$vuetify.breakpoint.smAndUp ? 'elevation-1' : 'elevation-0'" class="form-block mx-auto">
      <v-card-title>{{ title }}</v-card-title>
      <v-card-text>
        <v-text-field
            :label="$t('travelDetails.passengerDetails.firstName')"
            :value="pax.firstName"
            @change="setFirstName({'id': pax.id, value: $event})"
            :rules="[v => !!v || $t('forms.fieldRequired')]"
            single-line
        ></v-text-field>
        <v-text-field
            :label="$t('travelDetails.passengerDetails.lastName')"
            :value="pax.lastName"
            @change="setLastName({'id': pax.id, value: $event})"
            :rules="[v => !!v || $t('forms.fieldRequired')]"
            single-line
        ></v-text-field>
        <v-select
            v-model="pax.sex"
            :items="sexTypes"
            item-text="name"
            item-value="code"
            :rules="[v => !!v || $t('forms.fieldRequired')]"
            :label="$t('travelDetails.passengerDetails.sex')"
            required
        ></v-select>
        <v-select
            v-model="pax.citizenshipCountry"
            :items="countries"
            item-text="name"
            item-value="code"
            :rules="[v => !!v || $t('forms.fieldRequired')]"
            :label="$t('travelDetails.passengerDetails.citizenship')"
            required
        ></v-select>
        <v-text-field
            v-if="pax.citizenshipCountry === 'lv'"
            :label="$t('travelDetails.passengerDetails.nationalId')"
            :rules="[v => !!v || $t('forms.fieldRequired')]"
            single-line
        ></v-text-field>
        <v-dialog
            ref="dateOfBirthDialog"
            v-model="pax.dateOfBirthDialogVisible"
            :return-value.sync="pax.dateOfBirth"
            persistent
            width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
                v-model="pax.dateOfBirth"
                :label="$t('travelDetails.passengerDetails.dateOfBirth')"
                readonly
                v-bind="attrs"
                v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker :locale="$i18n.locale" v-model="pax.dateOfBirth" scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="pax.dateOfBirthDialogVisible = false">
              {{ $t('forms.buttons.cancel') }}
            </v-btn>
            <v-btn text color="primary" @click="$refs.dateOfBirthDialog.save(pax.dateOfBirth)">
              {{ $t('forms.buttons.confirm') }}
            </v-btn>
          </v-date-picker>
        </v-dialog>
        <v-divider></v-divider>
        <v-select
            v-model="pax.identityDocumentType"
            :items="identityDocumentTypes"
            item-text="name"
            item-value="code"
            :rules="[v => !!v || $t('forms.fieldRequired')]"
            :label="$t('travelDetails.passengerDetails.identityDocumentType')"
            required
        ></v-select>
        <v-text-field
            :label="$t('travelDetails.passengerDetails.identityDocumentNumber')"
            single-line
            :rules="[v => !!v || $t('forms.fieldRequired')]"
        ></v-text-field>
        <v-divider></v-divider>
        <v-container class="d-flex pa-0">
          <v-text-field
              class="pe-8 flex-grow-0"
              :label="$t('travelDetails.passengerDetails.phoneCountryCode')"
              single-line
              :rules="[v => !!v || $t('forms.fieldRequired')]"
          ></v-text-field>
          <v-text-field
              class="flex-grow-1"
              :label="$t('travelDetails.passengerDetails.phoneNumber')"
              single-line
              :rules="[v => !!v || $t('forms.fieldRequired')]"
          ></v-text-field>
        </v-container>
        <v-text-field
            :label="$t('travelDetails.passengerDetails.email')"
            single-line
            :rules="[v => !!v || $t('forms.fieldRequired')]"
        ></v-text-field>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import {mapMutations, mapState} from 'vuex'

export default {
  name: 'PassengerDetails',
  props: ['title', 'pax'],
  methods: {
    ...mapMutations('travelDetails/passengers', [
      'setFirstName',
      'setLastName',
    ]),
  },
  computed: {
    ...mapState('lookups', ['sexTypes','identityDocumentTypes', 'countries'])
  }
}
</script>