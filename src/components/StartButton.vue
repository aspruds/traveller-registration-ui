<template>
  <button>
    {{ title }}
  </button>
</template>

<script>
export default {
  name: 'StartButton',
  props: ['title']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
@import '@/assets/styles/common.scss';

button {
  padding: 10px;
  width: 100%;

  @include media(">=phone") {
    padding: 5px;
    width: auto;
  }
}
</style>
