<template lang="pug" scoped>
  .t-container
</template>

<style lang="sass">
$black: #1F1F1F
$blue: #1789FC
$white: #ffffff
$grey: #777879

header
  padding-top: 100px
  padding-bottom: 20vh
  width: 100%
  height: 115vh
  color: $white
  position: relative
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column
  user-select: none
  background-color: black
.header
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column
  text-align: center
  &__img
    height: 100%
    width: 100%
    object-fit: cover
    position: absolute
    z-index: 0
    top: 0
    left: 0
    right: 0
    bottom: 0
    filter: blur(3px) brightness(70%)
    user-select: none
    background-color: black
  &__h1
    z-index: 1
    margin: 0
  &__h2
    z-index: 1
    font-weight: normal
    margin-top: 60px
    margin-bottom: 50px
</style>
