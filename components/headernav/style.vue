<template lang="pug">
  .t-container
    colors
</template>

<style lang="sass">
  $black: #1F1F1F
  $blue: #1789FC
  $white: #ffffff

  .nav
    position: fixed
    z-index: 99
    width: 100%
    height: 100px
    padding: 0 10%
    background: $white
    display: flex
    justify-content: space-between
    align-items: center
    &-a
      text-decoration: none
      transition: .3s all
      &:hover
        color: $blue
    &__links
      height: 50%
      width: 570px
      display: flex
      justify-content: space-around
      align-items: center
      background-color: white
      &-a
        color: $black
        font-weight: bold
        height: 100%
        width: 25%
        display: flex
        justify-content: center
        align-items: center
  .nav__lang
    height: 50%
    width: 70px
    display: flex
    justify-content: space-between
    align-items: center
    background-color: white
    &-a
      color: $black
      font-weight: bold
      height: 100%
      width: 30%
      display: flex
      justify-content: space-between
      align-items: center
  .nav__ava
    height: 70px
    width: 70px
    border-radius: 5px
    object-fit: cover

</style>
