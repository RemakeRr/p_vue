<template lang="pug" scoped>
  .t-container
    .row
      .col-md-4
        a(href="mailto:muxumov0087@gmail.com")
          button Связаться со мной
</template>

<style lang="sass">
$black: #1F1F1F
$blue: #1789FC
$white: #ffffff
$grey: #777879
button
  width: 240px
  height: 35px
  background-color: $blue
  color: $white
  border-color: transparent
  border-radius: 15px
  box-shadow: 0 5px 15px 0px $blue
  transition: all .2s
  font-weight: 600
  cursor: pointer
  outline: none
  &:hover
    background-color: $white
    color: $blue
    box-shadow: 0 5px 15px 0px white

</style>
