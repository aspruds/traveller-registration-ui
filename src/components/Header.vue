<template>
  <header>
    <img class="logo" alt="Gerbonis" src="@/assets/images/gerbonis.png"/>
    <h1>
      <span>Ieceļotāju uzskaites kontroles elektroniskā sistēma</span>
      <span class="badge">TESTS</span>
    </h1>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
@import '@/assets/styles/common.scss';

header {
  display: flex;
  padding: 8px 12px 8px 12px;
  @include box-shadow(0, 4px, 2px, -2px, $color-light-grey)
}

img.logo {
  flex: 0 1 auto;
  margin: auto 12px auto auto;
  height: 40px;
}

h1 {
  flex: 2 0 auto;
  text-align: left;
  font-size: em(18);

  span {
    position: relative;
    top: 10px;
  }

  span.badge {
    margin-left: 10px;
    background: mediumblue;
    color: white;
    padding: 3px;
  }
}
</style>
