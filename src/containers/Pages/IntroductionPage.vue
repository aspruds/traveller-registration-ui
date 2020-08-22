<template>
  <div class="intro-page">
    <LanguageSwitcher/>
    <Introduction/>
  </div>
</template>

<script>
import LanguageSwitcher from '@/components/IntroductionPage/LanguageSwitcher.vue'
import Introduction from '@/components/IntroductionPage/Introduction.vue'

export default {
  name: 'IntroductionPage',
  components: {
    LanguageSwitcher,
    Introduction
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
@import '@/assets/styles/common.scss';

.intro-page {
    padding: 0 40px 40px 40px;
    margin: 0;
}
</style>
