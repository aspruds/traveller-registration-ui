<template>
  <div class="passenger-details">
    <v-card :class="$vuetify.breakpoint.smAndUp ? 'elevation-1' : 'elevation-0'" class="form-block mx-auto">
      <v-card-title>{{ title }}</v-card-title>
      <v-card-text>
        <v-text-field
            :value="traveller.firstName"
            @change="setFirstName({ id: travellerId, value: $event })"
            :label="$t('travelDetails.passengerDetails.firstName')"
            :rules="[validators.required, validators.name]"
        ></v-text-field>
        <v-text-field
            :value="traveller.lastName"
            @change="setLastName({ id: travellerId, value: $event })"
            :label="$t('travelDetails.passengerDetails.lastName')"
            :rules="[validators.required, validators.name]"
        ></v-text-field>
        <v-select
            :value="traveller.sex"
            @change="setSex({ id: travellerId, value: $event })"
            :items="sexTypes"
            :label="$t('travelDetails.passengerDetails.sex')"
            item-text="name"
            item-value="code"
            :rules="[validators.required]"
            required
        ></v-select>
        <v-select
            :value="traveller.citizenship"
            @change="setCitizenship({ id: travellerId, value: $event })"
            :items="countries"
            :label="$t('travelDetails.passengerDetails.citizenship')"
            item-text="name"
            item-value="code"
            :rules="[validators.required]"
            required
        ></v-select>
        <v-text-field
            :value="traveller.nationalId"
            :hint="$t('travelDetails.passengerDetails.nationalIdHint')"
            @change="setNationalId({ id: travellerId, value: $event })"
            :label="$t('travelDetails.passengerDetails.nationalId')"
            v-if="traveller.citizenship === 'LV'"
            :rules="[validators.required, validators.nationalIdNumber]"
        ></v-text-field>
        <DatePicker :value="traveller.dateOfBirth"
                    @input="setDateOfBirth({ id: travellerId, value: $event })"
                    :label="$t('travelDetails.passengerDetails.dateOfBirth')"
                    minValue="1900-01-01"
                    :maxValue="moment().format()"
                    :start-with-year="true"
                    :validation-rules="[validators.required]"/>
        <v-select
            :value="traveller.identityDocument.documentType"
            @change="setIdentityDocumentType({ id: travellerId, value: $event })"
            :items="identityDocumentTypes"
            item-text="name"
            item-value="code"
            :rules="[validators.required]"
            :label="$t('travelDetails.passengerDetails.identityDocumentType')"
            required
        ></v-select>
        <v-text-field
            :value="traveller.identityDocument.documentNumber"
            @change="setIdentityDocumentNumber({ id: travellerId, value: $event })"
            :label="$t('travelDetails.passengerDetails.identityDocumentNumber')"
            :rules="[validators.required]"
        ></v-text-field>
        <v-text-field
            :value="traveller.contactInformation.email"
            @change="setEmail({ id: travellerId, value: $event })"
            :label="$t('travelDetails.passengerDetails.email')"
            :rules="[validators.required, validators.email]"
        ></v-text-field>
        <v-text-field
            :value="traveller.seat"
            @change="setSeat({ id: travellerId, value: $event })"
            :label="$t('travelDetails.passengerDetails.seat')"
            :rules="[validators.required]"
        ></v-text-field>
      </v-card-text>
    </v-card>
    <v-card :class="$vuetify.breakpoint.smAndUp ? 'elevation-1' : 'elevation-0'" class="form-block mx-auto">
      <v-card-title>{{ $t('travelDetails.phone.title') }}</v-card-title>
      <v-card-text>
        <Phone
            v-for="(phone, key, index) in phones"
            :key="phone.id"
            :travellerId="travellerId"
            :phone="phone"
            :phoneIds="traveller.contactInformation.phones"
            :onlyItem="Object.keys(phones).length == 1"
            :firstItem="index == 0"
            :lastItem="index == Object.keys(phones).length - 1"
        ></Phone>
      </v-card-text>
    </v-card>
    <v-card :class="$vuetify.breakpoint.smAndUp ? 'elevation-1' : 'elevation-0'" class="form-block mx-auto">
      <v-card-title>{{ $t('travelDetails.recentCountry.title') }}</v-card-title>
      <v-card-subtitle>{{ $t('travelDetails.recentCountry.subtitle') }}</v-card-subtitle>
      <v-card-text>
        <RecentCountry
            v-for="(recentCountry, key, index) in recentCountries"
            :key="recentCountry.id"
            :travellerId="travellerId"
            :recentCountry="recentCountry"
            :recentCountryIds="traveller.recentCountries"
            :onlyItem="Object.keys(recentCountries).length == 1"
            :firstItem="index == 0"
            :lastItem="index == Object.keys(recentCountries).length - 1"
        ></RecentCountry>
      </v-card-text>
    </v-card>
    <v-card :class="$vuetify.breakpoint.smAndUp ? 'elevation-1' : 'elevation-0'" class="form-block mx-auto">
      <v-card-title>{{ $t('travelDetails.address.title') }}</v-card-title>
      <v-card-text>
        <Address
            v-for="(address, key, index) in addresses"
            :key="address.id"
            :travellerId="travellerId"
            :address="address"
            :phoneIds="traveller.contactInformation.addresses"
            :onlyItem="Object.keys(addresses).length == 1"
            :firstItem="index == 0"
            :lastItem="index == Object.keys(addresses).length - 1"
        ></Address>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex'
import Phone from "@/components/TravelDetailsPage/Phone";
import Address from "@/components/TravelDetailsPage/Address";
import * as validators from "@/utils/validations/validators.js"
import RecentCountry from "@/components/TravelDetailsPage/RecentCountry";
import DatePicker from "@/components/DatePicker";
import moment from 'moment';

export default {
  name: 'TravellerDetailsForm',
  props: ['title', 'travellerId'],
  components: {
    RecentCountry,
    Address,
    Phone,
    DatePicker
  },
  mounted() {
    this.initialize(this.travellerId)
  },
  methods: {
    moment: () => moment(),
    ...mapMutations('registration/traveller', [
        'setFirstName',
        'setLastName',
        'setSex',
        'setCitizenship',
        'setNationalId',
        'setDateOfBirth',
        'setIdentityDocumentType',
        'setIdentityDocumentNumber',
        'setEmail',
        'setSeat',
    ]),
    ...mapActions('registration/traveller', ['initialize'])
  },
  computed: {
    validators: () => validators,
    ...mapGetters('registration/traveller', ['travellerById']),
    traveller(){
      return this.travellerById(this.travellerId);
    },
    phones(){
      let phoneIds = this.traveller().contactInformation.phones;
      return phoneIds.map(id => this.phones[id]);
    },
    addresses(){
      let addressIds = this.traveller().contactInformation.addresses;
      return addressIds.map(id => this.addresses[id]);
    },
    recentCountries(){
      let recentCountryIds = this.traveller().recentCountries;
      return recentCountryIds.map(id => this.recentCountries[id]);
    },
    ...mapState('registration/traveller', ['travellers', 'phones', 'addresses', 'recentCountries']),
    ...mapState('lookups', ['sexTypes', 'identityDocumentTypes', 'countries']),
  }
}
</script>