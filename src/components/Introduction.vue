<template>
  <div class="introduction">
    <h1>{{ $t('introduction.title') }}</h1>
    <p>{{ $t('introduction.willBeSubmittedToSPKC') }}</p>
    <StartButton :title="$t('introduction.startButton')" class="start-button" />
  </div>
</template>

<script>
import StartButton from "@/components/StartButton";
export default {
  name: 'Introduction',
  components: {
    StartButton
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
@import '@/assets/styles/common.scss';

.introduction {
  margin-bottom: 40px;
}

h1 {
  margin: 0 0 12px 0;
  font-size: em(30);
}

.start-button {
  margin-top: 40px;
}
</style>

<i18n>
{
  "en": {
   "introduction": {
      "title": "Registration form which should be filled by persons entering Latvia",
      "willBeSubmittedToSPKC": "Registration forms will be submitted to SPKC and will be kept for one month.",
      "startButton": "Start"
   }
  },
  "lv": {
    "introduction": {
      "title": "Anketa, kuru aizpilda persona, kas ieceļo Latvijā, izmantojot starptautisko pārvadātāju pakalpojumus",
      "willBeSubmittedToSPKC": "Anketas tiks nodotas SPKC un tiks glabātas vienu mēnesi.",
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
