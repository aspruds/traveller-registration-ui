<template>
  <div class="intro-page">
    <Introduction/>
    <StartButton/>
  </div>
</template>

<script>
import Introduction from '@/components/Introduction.vue'
import StartButton from '@/components/StartButton.vue'

export default {
  name: 'IntroPage',
  components: {
    Introduction,
    StartButton
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
@import '@/assets/styles/common.scss';

.intro-page {
    margin: 40px;
}
</style>
