<template lang="pug" scoped>
  .t-container

</template>

<style lang="sass">
$black: #1F1F1F
$blue: #1789FC
$white: #ffffff
$grey: #777879
.works
  padding: 60px 0
  &-top
    display: flex
    justify-content: flex-start
    align-items: center
  &_grid
    width: 100%
    margin-top: 60px
    display: flex
    flex-flow: row wrap
    &-w
      width: 300px
      flex: auto
      margin: 30px 15px
      transition: all 0.3s
      &:hover
        transform: scale(1.1)
        filter: brightness(%)
        box-shadow: 0px 3px 30px 0px rgba(31,31,31,0.70)
      & img
        z-index: 1
        width: 100%
        height: 100%
        object-fit: cover
        filter: brightness(100%)
        transition: all 0.25s
        &:hover

.round
  width: 30px
  height: 30px
  background-color: $blue
  border-radius: 15px
  box-shadow: 0px 5px 10px 0px rgba(23,137,252,1)
  margin-left: 60px
</style>
