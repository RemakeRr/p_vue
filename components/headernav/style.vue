<template lang="pug">
  .t-container
</template>

<style lang="sass">
$black: #1F1F1F
$blue: #1789FC
$white: #ffffff
$grey: #777879

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
  box-shadow: 0px 3px 30px 0px rgba(31,31,31,0.29)
  &-a
    text-decoration: none
    transition: .2s all
    &:hover
      color: $blue
      text-decoration: none
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
  height: 60px
  width: 60px
  border-radius: 40px
  object-fit: cover
  transition: all 0.3s
  cursor: pointer
  &:hover
    border-color: #808080
    filter: brightness(70%)

</style>
