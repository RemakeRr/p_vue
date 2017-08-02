<template lang="pug">
  .t-container
    header-style
    header
      img(src="img/header/headerbg.png").header__img
      h1.header__h1 Приветствую
      h2.header__h2 Меня зовут Алибек. Занимаюсь frontend-разработкой и веб-дизайном
      Social

</template>

<script>
import HeaderStyle from '~components/header/style.vue'
import Social from '~components/social/social.vue'

export default {
  components: {
    HeaderStyle,
    Social
  }
}
</script>
