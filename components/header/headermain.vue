<template lang="pug" scoped>
  .t-container
    header-style
    header
      img(src="img/header/headerbg.png").header__img
      h1.header__h1 Приветствую
      h2.header__h2 Меня зовут Алибек. Занимаюсь frontend-разработкой и веб-дизайном
      Social
      ButtonContact

</template>

<script>
import HeaderStyle from '~components/header/style.vue'
import Social from '~components/social/social.vue'
import ButtonContact from '~components/button_contact/button_contact.vue'

export default {
  components: {
    HeaderStyle,
    Social,
    ButtonContact
  }
}
</script>
