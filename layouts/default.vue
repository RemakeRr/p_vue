<template>
  <div>
    <HeaderNav></HeaderNav>
    <nuxt/>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '~components/footer/footer.vue'
import HeaderNav from '~components/headernav/headernav.vue'

export default {
  components: {
    Footer,
    HeaderNav
  }
}
</script>

<style lang="sass">
$black: #1F1F1F
$blue: #1789FC
$white: #ffffff

html
  font-family: 'Mariupol', sans-serif
  font-size: 16px
  word-spacing: 1px
  -ms-text-size-adjust: 100%
  -webkit-text-size-adjust: 100%
  -moz-osx-font-smoothing: grayscale
  -webkit-font-smoothing: antialiased
  box-sizing: border-box

*, *:before, *:after
  box-sizing: border-box
  margin: 0

</style>
