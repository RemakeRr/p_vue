<template lang="pug">
  .t-container
</template>

<style lang="sass">
$black: #1F1F1F
$blue: #1789FC
$white: #ffffff
$grey: #777879

footer
  padding: 30px 110px
  background-color: $black
  display: flex
  flex-direction: column
  flex-wrap: wrap
  justify-content: center
  align-items: center

.footer_btn
  width: 100%
  display: flex
  flex-wrap: wrap
  justify-content: space-between
  align-items: center
  margin-bottom: 30px
  & a
    flex-basis: 270px
button
  width: 240px
  height: 35px
  background-color: $blue
  color: $white
  border-color: transparent
  border-radius: 15px
  box-shadow: 0 5px 15px 0px $blue
  transition: all .3s
  font-weight: 600
  cursor: pointer
  outline: none
  &:hover
    background-color: $white
    color: $blue
    box-shadow: 0 5px 15px 0px white

</style>
