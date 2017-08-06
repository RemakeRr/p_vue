<template lang="pug">
  services-template
    ServicesStyle
    section.services
      .container
        .row
          .col-md-5
            .row
              .col-lg-12
                .services-top
                  h1 Услуги
                  .round
                h2 Веб разработка
                p Все виды форматов. Технологичны, адаптивны и быстры. Полная оптимизация функционала под вашу бизнес-модель.
              .col-lg-12
                h2.services__des Дизайн
                p Минималистичный, чистый дизайн в соответствии с последними трендами. Это делает проекты очень приятными и удобными для восприятия.
          .col-md-6.offset-md-1
            .row
              img(src="img/services/services.gif").services__img

</template>

<script>
  import ServicesStyle from '~components/services/style.vue'

  export default {
    components: {
      ServicesStyle
    }
  }
</script>
