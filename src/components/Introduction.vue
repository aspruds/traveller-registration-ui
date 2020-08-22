<template>
  <div class="introduction">
    <h1>{{ $t('introduction.title') }}</h1>
    <div class="rules" v-html="$t('introduction.rules')"></div>
    <div class="controls">
      <v-checkbox @change="setAgreedToRules" :input-value="agreedToRules" :label="$t('introduction.agreeToRules')"></v-checkbox>
      <div class="buttons">
        <v-btn :disabled="!agreedToRules" class="button" @click="showTravelDetails()" color="primary">{{ $t('introduction.startButton') }}</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapMutations } from 'vuex'
import {SET_AGREED_TO_RULES} from '@/store/mutation-types'
export default {
  name: 'Introduction',
  methods: {
    showTravelDetails() {
      if (this.$route.name !== 'TravelDetailsPage') {
        this.$router.push({ name: 'TravelDetailsPage' })
      }
    },
    ...mapMutations('introduction', [
      SET_AGREED_TO_RULES,
    ]),
    setAgreedToRules: function(value){
      this[SET_AGREED_TO_RULES](value)
    }
  },
  computed: mapState('introduction', [
    'agreedToRules'
  ])
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

  .rules {
    ::v-deep p {
      text-align: justify;
    }
  }

  .controls {
    margin-top: 25px;
  }

  .buttons {
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
      "rules": "<p>Prior to the arrival in the Republic of Latvia, a person who enters the country by using services of international carriers must confirm in writing that upon arrival in Latvia, the epidemiological safety measures established in the country will be observed. In the statement the person must indicate his or her name, surname, personal identification code, contact telephone number and the address of the actual place of residence where the person can be reached, as well as the countries and dates of departure in which the person has stayed during the last 14 days before the arrival in Latvia.</p>\n<p>If the person has stayed in a country that is subject to the special precautionary and restrictive measures, published on the website of the Centre for Disease Prevention and Control (SPKC), he/she must declare that he/she will take the special precautionary measures, including self-isolation.</p>\n<p>If the arrival of a foreign national in Latvia is necessary for the fulfilment of obligations of Latvian merchants, then this person must confirm in writing that while staying in Latvia, he/she will ensure self-isolation outside the working hours, monitor his/her health condition and observe the special precautionary measures.</p>\n<p>If the person has stayed in a country that is not subject to the precautionary and restrictive measures, the person does not have to comply with the special precautionary measures.</p>\n<p>The relevant carrier is responsible for handing over the completed statement to the State Border Guard and SPKC as soon as possible.</p>\n<p>Questionnaires of persons who have stayed in a country (published on the SPKC website), which is subject to the special precautionary and restrictive measures, must be submitted to the State Border Guard.</p>\n<p>The remaining questionnaires must be submitted to the SPKC.</p>\n<p>The responsible authority must store the statements for one month.</p>",
      "agreeToRules": "I confirm that information given in this form is true and correct, as well I’m informed that the processing of personal data is being carried out in accordance to points (e) and (d) of Article 6(1) of REGULATION (EU) 2016/679 OF THE EUROPEAN PARLIAMENT AND OF THE COUNCIL of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation), with a purpose – protection of the vital interests of society.",
      "startButton": "Start"
   }
  },
  "lv": {
    "introduction": {
      "title": "Anketa, kuru aizpilda persona, kas ieceļo Latvijā, izmantojot starptautisko pārvadātāju pakalpojumus",
      "rules": "<p>Pirms ierašanās Latvijas Republikā persona, kura ieceļo, izmantojot starptautisko pārvadātāju pakalpojumus, rakstiski apliecina, ka, ierodoties Latvijā, ievēros valstī noteiktos epidemioloģiskās drošības pasākumus. Apliecinājumā persona norāda savu vārdu, uzvārdu, personas kodu, kontakttālruni saziņai un faktiskās dzīvesvietas adresi, kurā būs sasniedzama, kā arī valstis un izbraukšanas datumus, kurās uzturējusies pēdējo 14 dienu laikā pirms ierašanās Latvijā.</p>\n<p>Ja persona ir uzturējusies valstī, kas ir Slimību profilakses un kontroles centra (SPKC) tīmekļvietnē publicētā valsts, uz kuru ir attiecināmi īpašie piesardzības un ierobežojošie pasākumi, tā apliecina, ka ievēros īpašus piesardzības pasākumus, tai skaitā nodrošinās pašizolāciju.</p>\n<p>Ja ārvalstnieka ierašanās Latvijā nepieciešama Latvijas komersantu saistību izpildei, tad šī persona rakstiski apliecina, ka, uzturoties Latvijā, ārpus darba laika nodrošinās pašizolāciju, novēros savu veselības stāvokli un ievēros īpašus piesardzības pasākumus.</p>\n<p>Ja persona uzturējusies valstī, uz kuru nav attiecināmi piesardzības un ierobežojošie pasākumi, personai nav jāievēro īpašie piesardzības pasākumi.</p>\n<p>Attiecīgais pārvadātājs ir atbildīgs par aizpildīta personas apliecinājuma iespējami ātru nodošanu Valsts robežsardzei un SPKC.</p>\n<p>To personu anketas, kuras uzturējušās SPKC tīmekļvietnē publicētā valstī, uz kuru attiecināmi īpašie piesardzības un ierobežojošie pasākumi, nodod Valsts robežsardzei.</p>\n<p>Pārējās anketas tiek nodotas SPKC.</p>\n<p>Atbildīgā institūcija personas apliecinājumu glabā vienu mēnesi.</p>",
      "agreeToRules": "Esmu informēts (-ta), ka saskaņā ar Eiropas Parlamenta un Padomes 2016.gada 27.aprīļa regulu (ES) 2016/679 „Par fizisku personu aizsardzību attiecībā uz personas datu apstrādi un šādu datu brīvu aprīti” 6.panta 1.punkta e) un d) apakšpunktu, tiek veikta personu datu apstrāde. Mērķis - sabiedrības vitālo interešu aizsardzība.",
      "startButton": "Sākt"
    }
  },
  "ru": {
    "introduction": {
      "title": "Форма регистрации",
      "rules": "Anketas tiks nodotas SPKC un tiks glabātas vienu mēnesi.",
      "startButton": "Sākt"
    }
  }
}
</i18n>
