<template>
  <div class="transport-details">
    <v-card :class="$vuetify.breakpoint.smAndUp ? 'elevation-1' : 'elevation-0'" class="form-block mx-auto">
      <v-card-title>{{ title }}</v-card-title>
      <v-card-text>
        <v-select
            v-model="carrierType"
            :items="carrierTypes"
            item-text="name"
            item-value="code"
            :rules="[v => !!v || $t('forms.fieldRequired')]"
            :label="$t('travelDetails.transportDetails.carrierType')"
            required
        ></v-select>
        <v-text-field
            v-model="flightNumber"
            v-if="carrierType === 'plane'"
            :rules="[v => !!v || $t('forms.fieldRequired')]"
            :label="$t('travelDetails.transportDetails.flightNumber')"
        ></v-text-field>
        <v-dialog
            ref="dateOfEntryDialog"
            v-model="dateOfEntryDialogVisible"
            :return-value.sync="dateOfEntry"
            persistent
            width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
                v-model="dateOfEntry"
                :label="$t('travelDetails.transportDetails.dateOfEntry')"
                readonly
                v-bind="attrs"
                v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker ref="dateOfEntryDatePicker" :locale="$i18n.locale" v-model="dateOfEntry" scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="dateOfEntryDialogVisible = false">
              {{ $t('forms.buttons.cancel') }}
            </v-btn>
            <v-btn text color="primary" @click="$refs.dateOfEntryDialog.save(dateOfEntry)">
              {{ $t('forms.buttons.confirm') }}
            </v-btn>
          </v-date-picker>
        </v-dialog>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import { createHelpers } from 'vuex-map-fields';

const { mapFields } = createHelpers({
  getterType: 'registration/transportDetails/getField',
  mutationType: 'registration/transportDetails/updateField',
});

export default {
  name: 'TransportDetails',
  props: ['title'],
  data: () => ({
    dateOfEntryDialogVisible: false
  }),
  computed: {
    ...mapFields(['carrierType', 'flightNumber', 'dateOfEntry']),
    ...mapState('lookups', ['carrierTypes']),
  }
}
</script>