<template>
  <div class="recentCountry">
    <v-select
        :value="recentCountry.countryCode"
        @change="setCountryCode({ id: recentCountry.id, value: $event })"
        :items="countries"
        :label="$t('travelDetails.recentCountry.country')"
        item-text="name"
        item-value="code"
        :rules="[fieldRequired]"
        required
    ></v-select>
    <v-dialog
        ref="dateOfExitDialog"
        v-model="dateOfExitDialogVisible"
        :return-value.sync="dateOfExit"
        persistent
        width="290px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
            v-model="dateOfExit"
            :rules="[fieldRequired]"
            :label="$t('travelDetails.recentCountry.dateOfExit')"
            readonly
            v-bind="attrs"
            v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker
          ref="dateOfExitDatePicker"
          :locale="$i18n.locale"
          v-model="dateOfExit"
          scrollable>
        <v-spacer></v-spacer>
        <v-btn text color="primary" @click="dateOfExitDialogVisible = false">
          {{ $t('forms.buttons.cancel') }}
        </v-btn>
        <v-btn text color="primary" @click="$refs.dateOfExitDialog.save(dateOfExit)">
          {{ $t('forms.buttons.confirm') }}
        </v-btn>
      </v-date-picker>
    </v-dialog>

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
import fieldRequiredMixin from "@/utils/validations/FieldRequiredMixin";

export default {
  name: 'RecentCountry',
  props: ['travellerId', 'recentCountry', 'recentCountryIds', 'firstItem', 'lastItem', 'onlyItem'],
  mixins: [fieldRequiredMixin],
  data: () => ({
    dateOfExitDialogVisible: false
  }),
  methods: {
    ...mapMutations('registration/traveller/recentCountries', [
        'setCountryCode',
        'setDateOfExit'
    ]),
    ...mapActions('registration/traveller', ['addRecentCountry', 'deleteRecentCountry'])
  },
  computed: {
    recentCountries(){
      return this.recentCountriesIds.map(id => this.recentCountries[id]);
    },
    dateOfExit: {
      get() {
        return this.recentCountry.dateOfExit;
      },
      set(value) {
        this.setDateOfExit({ id: this.recentCountry.id, value });
      }
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