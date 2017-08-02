<template lang="pug">
  .t-container
    header-nav-style
    .nav
      img(src="img/header/navimg.jpg").nav__ava
      .nav__links
        nuxt-link.nav__links-a.nav-a(to="/") Главная
        nuxt-link.nav__links-a.nav-a(to="/works") Работы
        nuxt-link.nav__links-a.nav-a(to="/about") Обо мне
        nuxt-link.nav__links-a.nav-a(to="/contacts") Контакты
      .nav__lang
        nuxt-link.nav__lang-a.nav-a(to="/Ru") Ru
        nuxt-link.nav__lang-a.nav-a(to="/En") En

</template>

<script>
  import HeaderNavStyle from '~components/headernav/style.vue'

  export default {
    components: {
      HeaderNavStyle
    }
  }
</script>
