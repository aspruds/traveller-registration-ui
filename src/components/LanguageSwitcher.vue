<template>
  <div class="language-switcher">
    <v-radio-group v-model="locale" row>
      <v-radio
               v-for="lng in locales"
               :key="lng.code"
               @click="switchLocale(lng.code)"
               :label="lng.name"
               :value="lng.code">
      </v-radio>
    </v-radio-group>
  </div>
</template>

<script>
export default {
  name: 'LanguageSwitcher',
  methods: {
    switchLocale(locale) {
      this.$root.$i18n.locale = locale;
    }
  },
  data: function () {
    return {
      locale: this.$i18n.locale,
      locales: [
        { code: "lv", name: "Latviešu" },
        { code: "en", name: "English" },
        { code: "ru", name: "По-русски" }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
@import '@/assets/styles/common.scss';

.language-switcher {
  margin-bottom: 10px;
}
</style>
