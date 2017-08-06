<template lang="pug" scoped>
  .t-container
</template>

<style lang="sass">
$black: #1F1F1F
$blue: #1789FC
$white: #ffffff
$grey: #777879

.services
  padding: 100px 0 100px 0
  &-top
    display: flex
    justify-content: flex-start
    align-items: center
  & h2
    margin-top: 60px
  & p
    margin-top: 20px
  &__des
    margin-top: 30px
  & img
    bottom: 0
    position: absolute
    object-fit: cover
    width: 100%
    height: 100%
.round
  width: 30px
  height: 30px
  background-color: $blue
  border-radius: 15px
  box-shadow: 0px 5px 10px 0px rgba(23,137,252,1)
  margin-left: 60px
</style>
