<template lang="pug">
  .t-container
    StyleFoot
    footer
      .container
        .row
          .col-md-12
            .footer_btn
              a(href="/")
                button На главную
              a(href="/")
                button Работы
              a(href="/")
                button Контакты
              a(href="/")
                button Ресурсы
          .col-md-12
            .footer_soc
              Social

</template>

<script>
  import StyleFoot from '~components/footernav/style.vue'
  import Social from '~components/social/social.vue'

  export default {
    components: {
      StyleFoot,
      Social
    }
  }
</script>
