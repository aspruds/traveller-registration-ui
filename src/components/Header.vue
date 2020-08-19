<template>
  <header>
    <img class="logo" alt="Gerbonis" src="@/assets/images/gerbonis.png"/>
    <div class="title-container">
      <h1>
        {{ $t('header.title') }}
      </h1>
      <v-chip class="pa-3 badge secondary" label>
        {{ $t('header.testBadge') }}
      </v-chip>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
@import '@/assets/styles/common.scss';

header {
  display: flex;
  padding: 8px 12px 8px 12px;
  @include box-shadow(0, 4px, 2px, -2px, $color-light-grey);

  img.logo {
    flex: 0 1 auto;
    margin: auto 12px auto auto;
    height: 40px;
  }

  .title-container {
    flex: 2 0 auto;
    display: block;
    margin-top: 5px;

    @include media(">=phone") {
      display: flex;
    }

    h1 {
      flex: 0 0 auto;
      text-align: left;
      font-size: em(18);

      @include media(">=phone") {
        margin-top: 3px;
        margin-right: 5px;
      }
    }

    .badge {
      flex: 0 0 auto;
    }
  }
}



</style>

<i18n>
{
  "en": {
    "header": {
      "title": "Immigration Electronic Control System",
      "testBadge": "TEST SYSTEM"
    }

  },
  "lv": {
    "header": {
      "title": "Ieceļotāju uzskaites kontroles elektroniskā sistēma",
      "testBadge": "TESTA SISTĒMA"
    }
  }
}
</i18n>
