<template>
  <div class="transport-details">
    <Card>
      <v-card-title>{{ title }}</v-card-title>
      <v-card-text>
        <v-select
            :value="carrierType"
            @change="setCarrierType"
            :items="carrierTypes"
            item-text="name"
            item-value="code"
            :rules=" [validators.required]"
            :label="$t('travelDetails.transportDetails.carrierType')"
            required
        ></v-select>
        <v-text-field
            :value="flightNumber"
            @change="setFlightNumber"
            v-if="carrierType === 'plane'"
            :rules="[validators.required, validators.flightNumber]"
            :label="$t('travelDetails.transportDetails.flightNumber')"
            :hint="$t('travelDetails.transportDetails.flightNumberHint')"
            :persistent-hint="true"
        ></v-text-field>
        <div v-if="carrierType !== '' && carrierType !== 'plane'">
          <v-radio-group
              hide-details="true"
              @change="setRouteNumberKnown"
              :value="routeNumberKnown" row>
            <v-radio
                v-for="option in ifRouteKnownOptions"
                :key="option.value"
                :label="option.label"
                :value="option.value">
            </v-radio>
          </v-radio-group>
          <v-text-field
              v-if="routeNumberKnown === true"
              :value="routeNumber"
              @change="setRouteNumber"
              :rules="[validators.required]"
              :label="$t('travelDetails.transportDetails.routeNumber')"
              :persistent-hint="true"
          ></v-text-field>
          <div v-if="routeNumberKnown === false">
            <v-text-field
                :value="routeOrigin"
                @change="setRouteOrigin"
                :rules="[validators.required]"
                :label="$t('travelDetails.transportDetails.routeOrigin')"
                :persistent-hint="true"
            ></v-text-field>
            <DatePicker
                :value="routeDepartureDate"
                @input="setRouteDepartureDate($event)"
                :max-value="moment().format()"
                :label="$t('travelDetails.transportDetails.routeDepartureDate')"
                :validation-rules="[validators.required]"/>
            <TimePicker
                :value="routeDepartureTime"
                @input="setRouteDepartureTime($event)"
                :label="$t('travelDetails.transportDetails.routeDepartureTime')"
                :validation-rules="[validators.required]"/>
          </div>
        </div>
        <DatePicker
                    class="date-picker"
                    :value="dateOfEntry"
                    @input="setDateOfEntry($event)"
                    :min-value="moment().subtract(13, 'days').format()"
                    :max-value="moment().add(2, 'days').format()"
                    :label="$t('travelDetails.transportDetails.dateOfEntry')"
                    :hint="$t('travelDetails.transportDetails.dateOfEntryHint')"
                    :persistent-hint="true"
                    :validation-rules="[validators.required]"/>
      </v-card-text>
    </Card>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
import DatePicker from "@/components/DatePicker";
import moment from 'moment';
import * as validators from "@/utils/validations/validators.js"
import TimePicker from "@/components/TimePicker";
import Card from "@/components/Card";

export default {
  name: 'TransportDetails',
  props: ['title'],
  components: {Card, TimePicker, DatePicker},
  data: function () {
    return {
      ifRouteKnownOptions: [
        { value: true, label: this.$t('travelDetails.transportDetails.routeNumberKnown') },
        { value: false, label: this.$t('travelDetails.transportDetails.routeNumberUnknown') },
      ]
    }
  },
  methods: {
    moment: () => moment(),
    ...mapMutations('registration/transportDetail', [
      'setCarrierType',
      'setFlightNumber',
      'setRouteNumber',
      'setRouteNumberKnown',
      'setRouteOrigin',
      'setRouteDepartureDate',
      'setRouteDepartureTime',
      'setDateOfEntry',
    ]),
  },
  computed: {
    validators: () => validators,
    ...mapState('registration/transportDetail', [
      'carrierType',
      'flightNumber',
      'routeNumber',
      'routeNumberKnown',
      'routeOrigin',
      'routeDepartureDate',
      'routeDepartureTime',
      'dateOfEntry',
    ]),
    ...mapState('lookups', ['carrierTypes']),
  }
}
</script>