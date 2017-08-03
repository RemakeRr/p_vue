<template lang="pug">
  .t-container
    HeaderNav
    HeaderMain
    Services
</template>

<script>
import HeaderNav from '~components/headernav/headernav.vue'
import HeaderMain from '~components/header/headermain.vue'
import Services from '~components/services/services.vue'

export default {
  components: {
    HeaderNav,
    HeaderMain,
    Services
  }
}
</script>

<style lang="sass">

</style>
