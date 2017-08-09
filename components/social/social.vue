<template lang="pug" scoped>
  .t-container
    .row
      .col-md-4
        .soc
          a(href="https://www.behance.net/remakerr" target="blank")
            img(src="img/soc/behance.svg")
          a(href="https://github.com/RemakeRr" target="blank")
            img(src="img/soc/github.svg")
          a(href="https://vk.com/bigremake" target="blank")
            img(src="img/soc/vk.svg")
          a(href="https://www.instagram.com/lbklbkk/" target="blank")
            img(src="img/soc/instagram.svg")
          a(href="mailto:muxumov0087@gmail.com")
            img(src="img/soc/mail.svg")

</template>

<style lang="sass">
$black: #1F1F1F
$blue: #1789FC
$white: #ffffff
$grey: #777879
.soc
  width: 370px
  height: 35px
  display: flex
  justify-content: space-between
  margin-top: 30px
  margin-bottom: 30px
  & img
    height: 35px
    width: auto

/*==========  Desktop First  ==========
/* Large Devices, Wide Screens
@media only screen and (max-width: 1200px)
  /**/

/* Medium Devices, Desktops
@media only screen and (max-width: 992px)
  /**/

/* Small Devices, Tablets
@media only screen and (max-width: 768px)
  /**/

/* Extra Small Devices, Phones
@media only screen and (max-width: 576px)
  .soc
    display: none

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
