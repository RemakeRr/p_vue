<template lang="pug">
  .t-container
    HeaderMain
    Services
    Footer
</template>

<script>
import HeaderMain from '~components/header/headermain.vue'
import Services from '~components/services/services.vue'
import Footer from '~components/footer/footer.vue'

export default {
  components: {
    HeaderMain,
    Services,
    Footer
  }
}
</script>

<style lang="sass">

</style>
