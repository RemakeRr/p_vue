<template lang="pug">
  services-template
    ServicesStyle
    section.services
      .container
        .row
          .col-lg-5.col-md-5.col-sm-12
            .row
              .col-lg-12.col-md-12
                .services-top
                  h1 Услуги
                  .round
                h2 Веб разработка
                p Все виды форматов. Технологичны, адаптивны и быстры. Полная оптимизация функционала под вашу бизнес-модель.
              .col-lg-12.col-md-12
                h2.services__des Дизайн
                p Минималистичный, чистый дизайн в соответствии с последними трендами. Это делает проекты очень приятными и удобными для восприятия.
          .col-lg-6.col-md-6.offset-md-1.hidden-md-down
            .row
              img(src="img/services/services.jpg").services__img

</template>

<script>
  import ServicesStyle from '~components/services/style.vue'

  export default {
    components: {
      ServicesStyle
    }
  }
</script>
