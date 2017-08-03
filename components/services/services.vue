<template lang="pug">
  services-template
    ServicesStyle
    section.services
      .container
        .row
          .col-md-5
            .row
              .col-lg-12
                h1.services__h1 Услуги
                h2.services__h2 Веб разработка
                p.services__p От целевых страниц до корпоративных сайтов и крупных торговых площадок. Все виды форматов. Технологичны, адаптивны и быстры. Полная оптимизация функционала под вашу бизнес-модель.
              .col-lg-12
                h2.services__des Дизайн
                p.services__p Минималистичный, чистый дизайн в соответствии с последними трендами. Это делает проекты очень приятными и удобными для восприятия.
          .col-md-6.offset-md-1
            .row
              img(src="img/services/services.gif" width=).services__img

</template>

<script>
  import ServicesStyle from '~components/services/style.vue'

  export default {
    components: {
      ServicesStyle
    }
  }
</script>
