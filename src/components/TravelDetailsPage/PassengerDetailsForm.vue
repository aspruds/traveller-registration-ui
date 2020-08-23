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
        ></v-text-field>
        <v-text-field
            :label="$t('travelDetails.passengerDetails.lastName')"
            :value="pax.lastName"
            @change="setLastName({'id': pax.id, value: $event})"
            :rules="[v => !!v || $t('forms.fieldRequired')]"
        ></v-text-field>
        <v-select
            :value="pax.sex"
            @change="setSex({'id': pax.id, value: $event})"
            :items="sexTypes"
            item-text="name"
            item-value="code"
            :rules="[v => !!v || $t('forms.fieldRequired')]"
            :label="$t('travelDetails.passengerDetails.sex')"
            required
        ></v-select>
        <v-select
            :value="pax.citizenship"
            @change="setCitizenship({'id': pax.id, value: $event})"
            :items="countries"
            item-text="name"
            item-value="code"
            :rules="[v => !!v || $t('forms.fieldRequired')]"
            :label="$t('travelDetails.passengerDetails.citizenship')"
            required
        ></v-select>
        <v-text-field
            :value="pax.nationalId"
            @change="setNationalId({'id': pax.id, value: $event})"
            v-if="pax.citizenship === 'lv'"
            :label="$t('travelDetails.passengerDetails.nationalId')"
            :rules="[v => !!v || $t('forms.fieldRequired')]"
        ></v-text-field>
        <v-dialog
            ref="dateOfBirthDialog"
            v-model="dateOfBirthDialogVisible"
            :return-value.sync="dateOfBirth"
            persistent
            width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
                :value="dateOfBirth"
                :label="$t('travelDetails.passengerDetails.dateOfBirth')"
                readonly
                v-bind="attrs"
                v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker :locale="$i18n.locale" v-model="dateOfBirth" scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="dateOfBirthDialogVisible = false">
              {{ $t('forms.buttons.cancel') }}
            </v-btn>
            <v-btn text color="primary" @click="$refs.dateOfBirthDialog.save(dateOfBirth)">
              {{ $t('forms.buttons.confirm') }}
            </v-btn>
          </v-date-picker>
        </v-dialog>
        <v-divider></v-divider>
        <v-select
            :value="pax.identityDocumentType"
            @change="setIdentityDocumentType({'id': pax.id, value: $event})"
            :items="identityDocumentTypes"
            item-text="name"
            item-value="code"
            :rules="[v => !!v || $t('forms.fieldRequired')]"
            :label="$t('travelDetails.passengerDetails.identityDocumentType')"
            required
        ></v-select>
        <v-text-field
            :value="pax.identityDocumentNumber"
            @change="setIdentityDocumentNumber({'id': pax.id, value: $event})"
            :label="$t('travelDetails.passengerDetails.identityDocumentNumber')"
            :rules="[v => !!v || $t('forms.fieldRequired')]"
        ></v-text-field>
        <v-divider></v-divider>
        <v-container class="d-flex pa-0">
          <v-text-field
              :value="pax.phoneCountryCode"
              @change="setPhoneCountryCode({'id': pax.id, value: $event})"
              class="pe-8 flex-grow-0"
              :label="$t('travelDetails.passengerDetails.phoneCountryCode')"
              :rules="[v => !!v || $t('forms.fieldRequired')]"
          ></v-text-field>
          <v-text-field
              :value="pax.phoneNumber"
              @change="setPhoneNumber({'id': pax.id, value: $event})"
              class="flex-grow-1"
              :label="$t('travelDetails.passengerDetails.phoneNumber')"
              single-line
              :rules="[v => !!v || $t('forms.fieldRequired')]"
          ></v-text-field>
        </v-container>
        <v-text-field
            :value="pax.email"
            @change="setEmail({'id': pax.id, value: $event})"
            :label="$t('travelDetails.passengerDetails.email')"
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
  data: function () {
    return {
      dateOfBirthDialogVisible: false
    }
  },
  methods: {
    ...mapMutations('registration/passengers', [
      'setFirstName',
      'setLastName',
      'setSex',
      'setCitizenship',
      'setNationalId',
      'setDateOfBirth',
      'setIdentityDocumentType',
      'setIdentityDocumentNumber',
      'setPhoneNumber',
      'setPhoneCountryCode',
      'setEmail',
    ]),
  },
  computed: {
    dateOfBirth: {
      get: function() {
        return this.pax.dateOfBirth;
      },
      set: function(value) {
        if(this.pax.dateOfEntry != value) {
          this.setDateOfBirth({'id': this.pax.id, value: value});
        }
      }
    },
    ...mapState('lookups', ['sexTypes','identityDocumentTypes', 'countries'])
  }
}
</script>