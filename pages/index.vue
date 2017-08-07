<template lang="pug">
  .t-container
    HeaderMain
    Services
    Works
</template>

<script>
import HeaderMain from '~components/header/headermain.vue'
import Services from '~components/services/services.vue'
import Works from '~components/works/works.vue'

export default {
  components: {
    HeaderMain,
    Services,
    Works
  }
}
</script>

<style lang="sass">

</style>
