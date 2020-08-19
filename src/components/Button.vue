<template>
  <button @click="$emit('click')">
    {{ title }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: ['title']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
@import '@/assets/styles/common.scss';

button {
  cursor: pointer;
  padding: 10px;
  width: 100%;
  margin-bottom: 15px;

  @include media(">=phone") {
    padding: 5px;
    width: auto;
    margin-bottom: 0;
    margin-right: 15px;
  }
}
</style>
