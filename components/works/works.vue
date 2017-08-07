<template lang="pug">
  services-template
    WorksStyle
    section.works
      .container
        .row
          .col-md-12
            .works-top
              h1.works__h1 Работы
              .round
          .col-md-6
            img(src="img/works/w1.png")
          .col-md-6
            img(src="img/works/w2.jpg")
          .col-md-6
            img(src="img/works/w3.png")
          .col-md-6
            img(src="img/works/w4.png")

</template>

<script>
  import WorksStyle from '~components/works/style.vue'

  export default {
    components: {
      WorksStyle
    }
  }
</script>
