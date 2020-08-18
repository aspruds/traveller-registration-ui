<template>
  <div class="language-switcher">
    <ul>
      <li @click="switchLocale('en')" :class="$i18n.locale == 'en' ? 'active' : null">English</li>
      <li @click="switchLocale('lv')" :class="$i18n.locale == 'lv' ? 'active' : null">Latviešu</li>
      <li @click="switchLocale('ru')" :class="$i18n.locale == 'ru' ? 'active' : null">По-русски</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'LanguageSwitcher',
  methods: {
    switchLocale(locale) {
      this.$root.$i18n.locale = locale;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
@import '@/assets/styles/common.scss';

.language-switcher {
  margin-bottom: 30px;

  ul {
    display: flex;
  }

  li {
    margin-right: 10px;
    padding: 10px;
    border: 1px solid $color-light-grey;
    cursor: pointer;
    flex: 1 1 auto;

    @include media(">=phone") {
      padding: 5px;
      flex:  0 0 auto;
    }

    &.active {
      background: $color-medium-blue;
      color: $color-white;
    }
  }
}
</style>
