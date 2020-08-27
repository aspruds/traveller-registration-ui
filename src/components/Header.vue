<template>
  <div class="header-container">
    <header>
      <a @click="onLogoClicked"><img class="logo" alt="Gerbonis" src="@/assets/images/gerbonis.png"/></a>
      <div class="title-container">
        <h1>
          {{ $t('header.title') }}
        </h1>
        <v-chip class="pa-3 badge secondary" label>
          {{ $t('header.testBadge') }}
        </v-chip>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    onLogoClicked: function() {
      if (this.$route.name !== 'IntroductionPage') {
        this.$router.push({ name: 'IntroductionPage' })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
@import '@/assets/styles/common.scss';

.header-container {
  @include box-shadow(0, 4px, 2px, -2px, $color-light-grey);
}

header {
  display: flex;
  padding: 8px 0 8px 12px;
  margin: auto;

  @include media(">=phone") {
    width: 60%;
    padding: 8px 0 8px 36px;
  }

  a {
    line-height: 0;
  }

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
      flex-direction: row;
    }

    h1 {
      flex: 1 1 auto;
      text-align: left;
      font-size: em(18);

      @include media(">=phone") {
        margin-top: 3px;
        margin-right: 5px;
        flex: 0 0 auto;
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
