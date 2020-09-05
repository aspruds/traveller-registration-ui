<template>
  <div class="recentCountry">
    <v-select
        :value="recentCountry.countryCode"
        @change="setCountryCode({ id: recentCountry.id, value: $event })"
        :items="countries"
        :label="$t('travelDetails.recentCountry.country')"
        item-text="name"
        item-value="code"
        :rules="[validators.required]"
        required
    ></v-select>
    <DatePicker :value="recentCountry.dateOfExit"
                @input="setDateOfExit({ id: recentCountry.id, value: $event })"
                :label="$t('travelDetails.recentCountry.dateOfExit')"
                :validation-rules="[validators.required]"
                :min-value="moment().subtract(14, 'days').format()"
                :max-value="moment().add(2, 'days').format()"
    />
    <div class="buttons">
      <v-btn class="button" v-if="lastItem" small color="secondary"
             @click="addRecentCountry(travellerId)">
        {{ $t('travelDetails.recentCountry.addCountry') }}
      </v-btn>
      <v-btn class="button" v-if="!onlyItem" small color="warning"
             @click="deleteRecentCountry({ travellerId: travellerId, recentCountryId: recentCountry.id })">
        {{ $t('travelDetails.recentCountry.removeCountry') }}
      </v-btn>
    </div>
  </div>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex'
import * as validators from "@/utils/validations/validators.js"
import DatePicker from "@/components/DatePicker";
import moment from 'moment';

export default {
  name: 'RecentCountry',
  components: {DatePicker},
  props: ['travellerId', 'recentCountry', 'recentCountryIds', 'firstItem', 'lastItem', 'onlyItem'],
  methods: {
    moment: () => moment(),
    ...mapMutations('registration/traveller/recentCountries', [
        'setCountryCode',
        'setDateOfExit'
    ]),
    ...mapActions('registration/traveller', ['addRecentCountry', 'deleteRecentCountry'])
  },
  computed: {
    validators: () => validators,
    recentCountries(){
      return this.recentCountriesIds.map(id => this.recentCountries[id]);
    },
    ...mapState('lookups', ['countries']),
    ...mapState('registration/traveller/recentCountries', ['recentCountries']),
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