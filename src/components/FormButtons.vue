<template>
  <div class="buttons">
    <slot></slot>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
@import '@/assets/styles/common.scss';

.buttons {
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 20px;

  @include media(">=phone") {
    margin-left: 0;
    margin-right: 0;
    margin-top: 30px;
    display: flex;
  }

  .button {
    display: block;
    width: 100%;
    margin-bottom: 15px;

    @include media(">=phone") {
      width: auto;
      margin-bottom: 0;
      margin-right: 10px;
    }
  }
}

</style>