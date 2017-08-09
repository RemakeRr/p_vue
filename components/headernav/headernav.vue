<template lang="pug">
  .t-container
    header-nav-style
    .nav__media-btn(@click="show = !show")
      img(src="img/header/navmenu.png").nav__media-btn--img
    .nav__media-menu(v-show="!show")
      nuxt-link.nav__media-menu-a(to="/") Главная
      nuxt-link.nav__media-menu-a(to="/works") Работы
      nuxt-link.nav__media-menu-a(to="/about") Обо мне
      nuxt-link.nav__media-menu-a(to="/contacts") Контакты
    .nav
      img(src="img/header/navimg.jpg").nav__ava
      .nav__links
        nuxt-link.nav__links-a(to="/") Главная
        nuxt-link.nav__links-a(to="/works") Работы
        nuxt-link.nav__links-a(to="/about") Обо мне
        nuxt-link.nav__links-a(to="/contacts") Контакты
      .nav__lang
        nuxt-link.nav__lang-a(to="/Ru") Ru
        nuxt-link.nav__lang-a(to="/En") En

</template>

<script>
  import HeaderNavStyle from '~components/headernav/style.vue'

  export default {
    components: {
      HeaderNavStyle
    },
    data: function () {
      return {
        show: true
      }
    }
  }
</script>
