<template>
  <v-app>
    <Header/>
    <div class="router-container">
      <router-view></router-view>
    </div>
  </v-app>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
@import '@/assets/styles/common.scss';

#app {
  font-family: 'PT Sans Narrow', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  .router-container {
    @include media(">=phone") {
      width: 60%;
      margin: 0 auto 0 auto;
    }
  }
}
</style>
