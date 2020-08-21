<template>
  <div class="introduction">
    <h1>{{ $t('introduction.title') }}</h1>
    <p>{{ $t('introduction.willBeSubmittedToSPKC') }}</p>
    <div class="buttons">
      <v-btn class="button" @click="showTravelDetails()" color="primary">{{ $t('introduction.startButton') }}</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Introduction',
  methods: {
    showTravelDetails() {
      if (this.$route.name !== 'TravelDetailsPage') {
        this.$router.push({ name: 'TravelDetailsPage' })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
@import '@/assets/styles/common.scss';

.introduction {
  margin-bottom: 40px;

  h1 {
    margin: 0 0 12px 0;
    font-size: em(30);
  }

  p {
    text-align: justify;
  }

  .buttons {
    margin-top: 25px;
    @include media(">=phone") {
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
   "introduction": {
      "title": "Questionnaire to be Filled in by Persons Entering Latvia Using Services of International Carriers",
      "willBeSubmittedToSPKC": "Prior to the arrival in the Republic of Latvia, a person who enters the country by using services of international carriers must confirm in writing that upon arrival in Latvia, the epidemiological safety measures established in the country will be observed. In the statement the person must indicate his or her name, surname, personal identification code, contact telephone number and the address of the actual place of residence where the person can be reached, as well as the countries and dates of departure in which the person has stayed during the last 14 days before the arrival in Latvia.",
      "startButton": "Start"
   }
  },
  "lv": {
    "introduction": {
      "title": "Anketa, kuru aizpilda persona, kas ieceļo Latvijā, izmantojot starptautisko pārvadātāju pakalpojumus",
      "willBeSubmittedToSPKC": "Pirms ierašanās Latvijas Republikā persona, kura ieceļo, izmantojot starptautisko pārvadātāju pakalpojumus, rakstiski apliecina, ka, ierodoties Latvijā, ievēros valstī noteiktos epidemioloģiskās drošības pasākumus. Apliecinājumā persona norāda savu vārdu, uzvārdu, personas kodu, kontakttālruni saziņai un faktiskās dzīvesvietas adresi, kurā būs sasniedzama, kā arī valstis un izbraukšanas datumus, kurās uzturējusies pēdējo 14 dienu laikā pirms ierašanās Latvijā.",
      "startButton": "Sākt"
    }
  },
  "ru": {
    "introduction": {
      "title": "Форма регистрации",
      "willBeSubmittedToSPKC": "Anketas tiks nodotas SPKC un tiks glabātas vienu mēnesi.",
      "startButton": "Sākt"
    }
  }
}
</i18n>
