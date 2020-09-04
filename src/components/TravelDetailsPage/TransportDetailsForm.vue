<template>
  <div class="transport-details">
    <v-card :class="$vuetify.breakpoint.smAndUp ? 'elevation-1' : 'elevation-0'" class="form-block mx-auto">
      <v-card-title>{{ title }}</v-card-title>
      <v-card-text>
        <v-select
            :value="carrierType"
            @change="setCarrierType"
            :items="carrierTypes"
            item-text="name"
            item-value="code"
            :rules=" [fieldRequired]"
            :label="$t('travelDetails.transportDetails.carrierType')"
            required
        ></v-select>
        <v-text-field
            :value="flightNumber"
            @change="setFlightNumber"
            v-if="carrierType === 'plane'"
            :rules="[fieldRequired, flightNumberRequired]"
            :label="$t('travelDetails.transportDetails.flightNumber')"
        ></v-text-field>
        <DatePicker :value="dateOfEntry"
                    @input="setDateOfEntry($event)"
                    :min-value="moment().subtract(13, 'days').format()"
                    :max-value="moment().add(2, 'days').format()"
                    :label="$t('travelDetails.transportDetails.dateOfEntry')"
                    :validation-rules="[fieldRequired]"/>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
import fieldRequiredMixin from "@/utils/validations/FieldRequiredMixin";
import flightNumberRequiredMixin from "@/utils/validations/FlightNumberRequiredMixin";
import DatePicker from "@/components/DatePicker";
import moment from 'moment';

export default {
  name: 'TransportDetails',
  props: ['title'],
  components: {DatePicker},
  mixins: [fieldRequiredMixin, flightNumberRequiredMixin],
  methods: {
    moment: () => moment(),
    ...mapMutations('registration/transportDetail', [
      'setCarrierType',
      'setFlightNumber',
      'setDateOfEntry',
    ]),
  },
  computed: {
    ...mapState('registration/transportDetail', ['carrierType','flightNumber','dateOfEntry']),
    ...mapState('lookups', ['carrierTypes']),
  }
}
</script>