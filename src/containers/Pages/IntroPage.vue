<template>
  <div class="intro-page">
    <LanguageSwitcher/>
    <Introduction/>
  </div>
</template>

<script>
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import Introduction from '@/components/Introduction.vue'

export default {
  name: 'IntroPage',
  components: {
    LanguageSwitcher,
    Introduction
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
@import '@/assets/styles/common.scss';

.intro-page {
    padding: 40px;
    margin: 0;
}
</style>
