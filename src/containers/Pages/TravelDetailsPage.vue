<template>
  <div class="travel-details-page">
    <h1>{{ $t('travelDetails.pageTitle')}}</h1>

    <v-card class="elevation-3 form-block mx-auto">
      <v-card-title>{{ $t('travelDetails.subtitles.carrierDetails') }}</v-card-title>
      <v-card-text>
        <v-select
            v-model="transportDetails.carrierType"
            :items="carrierTypes"
            item-text="name"
            item-value="code"
            :rules="[v => !!v || $t('travelDetails.mandatoryField')]"
            :label="$t('travelDetails.carrierType')"
            required
        ></v-select>
        <v-text-field
            v-if="transportDetails.carrierType === 'plane'"
            :rules="[v => !!v || $t('travelDetails.mandatoryField')]"
            :label="$t('travelDetails.flightNumber')"
            single-line
        ></v-text-field>
        <v-dialog
            ref="dateOfEntryDialog"
            v-model="transportDetails.dateOfEntryDialogVisible"
            :return-value.sync="transportDetails.dateOfEntry"
            persistent
            width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
                v-model="transportDetails.dateOfEntry"
                :label="$t('travelDetails.dateOfEntry')"
                readonly
                v-bind="attrs"
                v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker :locale="$i18n.locale" v-model="transportDetails.dateOfEntry" scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="dateOfEntryDialogVisible = false">{{ $t('travelDetails.cancelButton') }}</v-btn>
            <v-btn text color="primary" @click="$refs.dateOfEntryDialog.save(transportDetails.dateOfEntry)">{{ $t('travelDetails.confirmButton') }}</v-btn>
          </v-date-picker>
        </v-dialog>
        </v-card-text>
    </v-card>

    <v-card class="elevation-3 form-block" v-for="pax in passengers" v-bind:key="pax.id">
      <v-card-title>{{ $t('travelDetails.subtitles.passengerDetails') }}</v-card-title>
      <v-card-text>
        <v-text-field
            :label="$t('travelDetails.firstName')"
            :rules="[v => !!v || $t('travelDetails.mandatoryField')]"
            single-line
        ></v-text-field>
        <v-text-field
            :label="$t('travelDetails.lastName')"
            :rules="[v => !!v || $t('travelDetails.mandatoryField')]"
            single-line
        ></v-text-field>
        <v-select
            v-model="pax.sex"
            :items="sexTypes"
            item-text="name"
            item-value="code"
            :rules="[v => !!v || $t('travelDetails.mandatoryField')]"
            :label="$t('travelDetails.sex')"
            required
        ></v-select>
        <v-select
            v-model="pax.citizenshipCountry"
            :items="countries"
            item-text="name"
            item-value="code"
            :rules="[v => !!v || $t('travelDetails.mandatoryField')]"
            :label="$t('travelDetails.citizenship')"
            required
        ></v-select>
        <v-text-field
            v-if="pax.citizenshipCountry === 'lv'"
            :label="$t('travelDetails.nationalId')"
            :rules="[v => !!v || $t('travelDetails.mandatoryField')]"
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
                :label="$t('travelDetails.dateOfBirth')"
                readonly
                v-bind="attrs"
                v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker :locale="$i18n.locale" v-model="pax.dateOfBirth" scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="pax.dateOfBirthDialogVisible = false">{{ $t('travelDetails.cancelButton') }}</v-btn>
            <v-btn text color="primary" @click="$refs.dateOfBirthDialog.save(pax.dateOfBirth)">{{ $t('travelDetails.confirmButton') }}</v-btn>
          </v-date-picker>
        </v-dialog>
        <v-divider></v-divider>
        <v-select
            v-model="pax.identityDocumentType"
            :items="identityDocumentTypes"
            item-text="name"
            item-value="code"
            :rules="[v => !!v || 'Item is required']"
            :label="$t('travelDetails.identityDocumentType')"
            required
        ></v-select>
        <v-text-field
            :label="$t('travelDetails.identityDocumentNumber')"
            single-line
            :rules="[v => !!v || $t('travelDetails.mandatoryField')]"
        ></v-text-field>
        <v-divider></v-divider>
        <v-container class="d-flex pa-0">
          <v-text-field
              class="pe-8 flex-grow-0"
              :label="$t('travelDetails.phoneCountryCode')"
              single-line
              :rules="[v => !!v || $t('travelDetails.mandatoryField')]"
          ></v-text-field>
          <v-text-field
              class="flex-grow-1"
              :label="$t('travelDetails.phoneNumber')"
              single-line
              :rules="[v => !!v || $t('travelDetails.mandatoryField')]"
          ></v-text-field>
        </v-container>
        <v-text-field
            :label="$t('travelDetails.email')"
            single-line
            :rules="[v => !!v || $t('travelDetails.mandatoryField')]"
        ></v-text-field>
      </v-card-text>
    </v-card>
    <div class="buttons">
      <v-btn class="button" @click="showDepartedCountries" color="primary">{{ $t('travelDetails.continueButton') }}</v-btn>
      <v-btn class="button" @click="showIntroduction">{{ $t('travelDetails.returnButton') }}</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TravelDetailsPage',
  methods: {
    showIntroduction() {
      if (this.$route.name !== 'IntroPage') {
        this.$router.push({ name: 'IntroPage' })
      }
    },
    showDepartedCountries() {
      if (this.$route.name !== 'DepartedCountriesPage') {
        this.$router.push({ name: 'DepartedCountriesPage' })
      }
    }
  },
  data: function () {
    return {
      transportDetails: {
        carrierType: null,
        dateOfEntry: new Date().toISOString().substr(0, 10),
        dateOfEntryDialogVisible: false,
      },
      passengers: [
        {
          id: 1,
          firstName: null,
          lastName: null,
          sex: null,
          citizenshipCountry: null,
          dateOfBirth: null,
          dateOfBirthDialogVisible: false,
          identityDocumentType: null,
          identityDocumentNumber: null,
          email: null,
        },
        {
          id: 2,
          firstName: null,
          lastName: null,
          sex: null,
          citizenshipCountry: null,
          dateOfBirth: null,
          dateOfBirthDialogVisible: false,
          identityDocumentType: null,
          identityDocumentNumber: null,
          email: null,
        }
      ],
      carrierTypes: [
        { code: "plane", name: this.$i18n.t("travelDetails.carrierTypes.plane")},
        { code: "bus", name: this.$i18n.t("travelDetails.carrierTypes.bus")},
        { code: "ferry", name: this.$i18n.t("travelDetails.carrierTypes.ferry")},
        { code: "other", name: this.$i18n.t("travelDetails.carrierTypes.other")}
      ],
      sexTypes: [
        { code: "male", name: this.$i18n.t("travelDetails.sexTypes.male")},
        { code: "female", name: this.$i18n.t("travelDetails.sexTypes.female")},
        { code: "other", name: this.$i18n.t("travelDetails.sexTypes.other")},
      ],
      countries: [
        { code: "lv", name: "Latvia"},
        { code: "zz", name: "Other"}
      ],
      identityDocumentTypes: [
        { code: "passport", name: this.$i18n.t("travelDetails.identityDocumentTypes.passport")},
        { code: "nationalIdCard", name: this.$i18n.t("travelDetails.identityDocumentTypes.nationalIdCard")},
        { code: "other", name: this.$i18n.t("travelDetails.identityDocumentTypes.other")}
      ],
    }
  },
}
</script>

<style lang="scss" rel="stylesheet/scss">
@import '@/assets/styles/common.scss';

.travel-details-page {
  padding: 0;
  margin: 0;
  @include media(">=phone") {
    padding: 10px 40px 40px 40px;
  }

  h1 {
    margin: 0 0 12px 0;
    font-size: em(30);
  }

  .form-block {
    margin-bottom: 15px;
  }

  .buttons {
    margin-left: 15px;
    margin-right: 15px;
    margin-top: 20px;

    @include media(">=phone") {
      margin-left: 0;
      margin-right: 0;
      margin-top: 30px;
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
}
</style>

<i18n>
{
  "en": {
   "travelDetails": {
      "carrierTypes": {
        "plane": "Plane",
        "bus": "Bus",
        "train": "Train",
        "ferry": "Ferry",
        "other": "Other"
      },
      "sexTypes": {
        "male": "Male",
        "female": "Female",
        "other": "Other"
      },
      "identityDocumentTypes": {
        "passport": "Passport",
        "nationalIdCard": "National ID Card",
        "other": "Other"
      },
      "pageTitle": "Declaration",
      "subtitles": {
        "carrierDetails": "Carrier Details",
        "passengerDetails": "Passenger Details"
      },
      "mandatoryField": "Mandatory field",
      "carrierType": "Carrier type",
      "flightNumber": "Flight number",
      "dateOfEntry": "Date of Entry",
      "firstName": "First Name",
      "lastName": "Last Name",
      "sex": "Sex",
      "phoneCountryCode": "Phone Country Code",
      "phoneNumber": "Phone Number",
      "email": "Email",
      "citizenship": "Citizenship",
      "nationalId": "National ID Number",
      "dateOfBirth": "Date of Birth",
      "identityDocumentType": "Identity Document Type",
      "identityDocumentNumber": "Identity Document Number",
      "returnButton": "Return",
      "continueButton": "Continue",
      "cancelButton": "Cancel",
      "confirmButton": "OK"
   }
  },
  "lv": {
    "travelDetails": {
      "carrierTypes": {
        "plane": "Lidmašīna",
        "bus": "Autobuss",
        "train": "Vilciens",
        "ferry": "Prāmis",
        "other": "Cits"
      },
      "sexTypes": {
        "male": "Vīrietis",
        "female": "Sieviete",
        "other": "Cits"
      },
      "identityDocumentTypes": {
        "passport": "Pase",
        "nationalIdCard": "Nacionālā ID karte",
        "other": "Cits"
      },
      "pageTitle": "Apliecinājums",
      "subtitles": {
        "carrierDetails": "Pārvadātāja dati",
        "passengerDetails": "Pasažieru dati"
      },
      "mandatoryField": "Obligāts lauks",
      "carrierType": "Pārvadātāja veids",
      "carrierType": "Pārvadātāja veids",
      "flightNumber": "Lidojuma numurs",
      "dateOfEntry": "Ieceļošanas datums",
      "firstName": "Vārds",
      "lastName": "Uzvārds",
      "sex": "Dzimums",
      "phoneCountryCode": "Tālruņa valsts kods",
      "phoneNumber": "Tālrunis",
      "email": "E-pasts",
      "citizenship": "Pilsonība",
      "nationalId": "Personas kods",
      "dateOfBirth": "Dzimšanas datums",
      "identityDocumentType": "Identifikācijas dokumenta tips",
      "identityDocumentNumber": "Identifikācijas dokumenta numurs",
      "returnButton": "Atgriezties",
      "continueButton": "Turpināt",
      "cancelButton": "Atcelt",
      "confirmButton": "Apstiprināt"
    }
  }
}
</i18n>