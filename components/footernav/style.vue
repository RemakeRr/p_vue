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
  justify-content: space-around
  align-items: center
  margin-bottom: 30px
  & a
    flex-basis: 200px
.footer_soc
  width: 100%
  display: flex
  justify-content: center
  align-items: center
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

/*==========  Desktop First  ==========
/* Large Devices, Wide Screens
@media only screen and (max-width: 1200px)
  .footer_btn
    display: none

/* Medium Devices, Desktops
@media only screen and (max-width: 992px)
  /**/

/* Small Devices, Tablets
@media only screen and (max-width: 768px)
  .footer_soc
    display: none

/* Extra Small Devices, Phones
@media only screen and (max-width: 576px)
  /**/

/* Custom, iPhone Retina
@media only screen and (max-width: 320px)
  /**/

/*==========  Mobile First  ==========
/* Custom, iPhone Retina
@media only screen and (min-width: 320px)
  /**/

/* Extra Small Devices, Phones
@media only screen and (min-width: 576px)
  /**/

/* Small Devices, Tablets
@media only screen and (min-width: 768px)
  /**/

/* Medium Devices, Desktops
@media only screen and (min-width: 992px)
  /**/

/* Large Devices, Wide Screens
@media only screen and (min-width: 1200px)
  /**/

</style>
