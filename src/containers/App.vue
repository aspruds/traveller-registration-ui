<template>
  <div id="app">
    <Header/>
    <IntroPage/>
  </div>
</template>

<script>
import IntroPage from '@/containers/Pages/IntroPage.vue'
import Header from '@/components/Header.vue'

export default {
  name: 'App',
  components: {
    Header,
    IntroPage
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
@import '@/assets/styles/common.scss';

#app {
  font-family: 'PT Sans Narrow', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
