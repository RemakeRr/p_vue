<template lang="pug">
  .t-container
</template>

<style lang="sass">
$black: #1F1F1F
$blue: #1789FC
$white: #ffffff

header
  width: 100%
  height: 100vh
  color: $white
  position: relative
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column
.header
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
  &__h1
    z-index: 1
    margin: 0
  &__h2
    z-index: 1
    font-weight: normal
    margin-top: 60px
    margin-bottom: 80px
</style>
