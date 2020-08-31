<template>
  <div class="passenger-details">
    <v-card :class="$vuetify.breakpoint.smAndUp ? 'elevation-1' : 'elevation-0'" class="form-block mx-auto">
      <v-card-title>{{ title }}</v-card-title>
      <v-card-text>
        <v-text-field
            :value="traveller.firstName"
            @change="setFirstName({ id: travellerId, value: $event })"
            :label="$t('travelDetails.passengerDetails.firstName')"
            :rules="[fieldRequired]"
        ></v-text-field>
        <v-text-field
            :value="traveller.lastName"
            @change="setLastName({ id: travellerId, value: $event })"
            :label="$t('travelDetails.passengerDetails.lastName')"
            :rules="[fieldRequired]"
        ></v-text-field>
        <v-select
            :value="traveller.sex"
            @change="setSex({ id: travellerId, value: $event })"
            :items="sexTypes"
            :label="$t('travelDetails.passengerDetails.sex')"
            item-text="name"
            item-value="code"
            :rules="[fieldRequired]"
            required
        ></v-select>
        <v-select
            :value="traveller.citizenship"
            @change="setCitizenship({ id: travellerId, value: $event })"
            :items="countries"
            :label="$t('travelDetails.passengerDetails.citizenship')"
            item-text="name"
            item-value="code"
            :rules="[fieldRequired]"
            required
        ></v-select>
        <v-text-field
            :value="traveller.nationalId"
            :hint="$t('travelDetails.passengerDetails.nationalIdHint')"
            @change="setNationalId({ id: travellerId, value: $event })"
            :label="$t('travelDetails.passengerDetails.nationalId')"
            v-if="traveller.citizenship === 'lv'"
            :rules="[fieldRequired, nationalIdNumberRequired]"
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
                :rules="[fieldRequired]"
                readonly
                v-bind="attrs"
                v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
              :locale="$i18n.locale"
              v-model="traveller.dateOfBirth"
              ref="dateOfBirthPicker"
              min="1900-01-01"
              :max="new Date().toISOString().substr(0, 10)"
              scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="dateOfBirthDialogVisible = false">
              {{ $t('forms.buttons.cancel') }}
            </v-btn>
            <v-btn text color="primary" @click="$refs.dateOfBirthDialog.save(traveller.dateOfBirth)">
              {{ $t('forms.buttons.confirm') }}
            </v-btn>
          </v-date-picker>
        </v-dialog>
        <v-select
            :value="traveller.identityDocument.documentType"
            @change="setIdentityDocumentType({ id: travellerId, value: $event })"
            :items="identityDocumentTypes"
            item-text="name"
            item-value="code"
            :rules="[fieldRequired]"
            :label="$t('travelDetails.passengerDetails.identityDocumentType')"
            required
        ></v-select>
        <v-text-field
            :value="traveller.identityDocument.documentNumber"
            @change="setIdentityDocumentNumber({ id: travellerId, value: $event })"
            :label="$t('travelDetails.passengerDetails.identityDocumentNumber')"
            :rules="[fieldRequired]"
        ></v-text-field>
        <v-text-field
            :value="traveller.contactInformation.email"
            @change="setEmail({ id: travellerId, value: $event })"
            :label="$t('travelDetails.passengerDetails.email')"
            :rules="[fieldRequired, emailRequired]"
        ></v-text-field>
        <v-text-field
            :value="traveller.seat"
            @change="setSeat({ id: travellerId, value: $event })"
            :label="$t('travelDetails.passengerDetails.seat')"
            :rules="[fieldRequired]"
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
import fieldRequiredMixin from "@/utils/validations/FieldRequiredMixin";
import emailRequiredMixin from "@/utils/validations/EmailRequiredMixin";
import nationalIdNumberRequiredMixin from "@/utils/validations/NationalIdNumberRequiredMixin";

export default {
  name: 'TravellerDetailsForm',
  props: ['title', 'travellerId'],
  mixins: [fieldRequiredMixin, emailRequiredMixin, nationalIdNumberRequiredMixin],
  components: {
    Address,
    Phone
  },
  data: function () {
    return {
      dateOfBirthDialogVisible: false
    }
  },
  watch: {
    dateOfBirthDialogVisible (val) {
      val && setTimeout(() => (this.$refs.dateOfBirthPicker.activePicker = 'YEAR'))
    },
  },
  mounted() {
    this.initialize(this.travellerId)
  },
  methods: {
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
    dateOfBirth: {
      get() {
        return this.traveller.dateOfBirth;
      },
      set(value) {
        this.setDateOfBirth(value);
      }
    },
    ...mapState('registration/traveller', ['travellers']),
    ...mapState('registration/traveller', ['phones']),
    ...mapState('registration/traveller', ['addresses']),
    ...mapState('lookups', ['sexTypes','identityDocumentTypes', 'countries'])
  }
}
</script>