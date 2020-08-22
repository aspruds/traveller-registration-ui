<template>
  <div class="transport-details">
    <v-card :class="$vuetify.breakpoint.smAndUp ? 'elevation-1' : 'elevation-0'" class="form-block mx-auto">
      <v-card-title>{{ title }}</v-card-title>
      <v-card-text>
        <v-select
            :value="transportDetails.carrierType"
            @change="setCarrierType"
            :items="carrierTypes"
            item-text="name"
            item-value="code"
            :rules="[v => !!v || $t('forms.fieldRequired')]"
            :label="$t('travelDetails.transportDetails.carrierType')"
            required
        ></v-select>
        <v-text-field
            :value="transportDetails.flightNumber"
            @change="setFlightNumber"
            v-if="transportDetails.carrierType === 'plane'"
            :rules="[v => !!v || $t('forms.fieldRequired')]"
            :label="$t('travelDetails.transportDetails.flightNumber')"
            single-line
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
                :value="dateOfEntry"
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
import {mapMutations, mapState} from 'vuex'

export default {
  name: 'TransportDetails',
  props: ['title'],
  data: function () {
    return {
      dateOfEntryDialogVisible: false
    }
  },
  methods: {
    ...mapMutations('travelDetails/transportDetails', [
      'setCarrierType',
      'setFlightNumber',
      'setDateOfEntry',
    ]),
  },
  computed: {
    dateOfEntry: {
      get: function() {
        return this.transportDetails.dateOfEntry;
      },
      set: function(value) {
        if(this.transportDetails.dateOfEntry != value) {
          this.setDateOfEntry(value);
        }
      }
    },
    ...mapState('travelDetails', ['transportDetails']),
    ...mapState('lookups', ['carrierTypes']),
  }
}
</script>