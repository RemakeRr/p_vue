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
        .works_grid
          .works_grid-w
            img(src="img/works/w1.png")
          .works_grid-w.w2
            img(src="img/works/w3.png")
          .works_grid-w
            img(src="img/works/w2.jpg")
          .works_grid-w
            img(src="img/works/w4.png")
          .works_grid-w
            img(src="img/works/w5.jpg")
          .works_grid-w
            img(src="img/works/w6.jpg")
          .works_grid-w
            img(src="img/works/w7.jpg")
          .works_grid-w
            img(src="img/works/w8.jpg")
          .works_grid-w
            img(src="img/works/w9.jpg")

</template>

<script>
  import WorksStyle from '~components/works/style.vue'

  export default {
    components: {
      WorksStyle
    }
  }
</script>
