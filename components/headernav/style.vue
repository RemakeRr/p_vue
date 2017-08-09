<template lang="pug">
  .t-container
</template>

<style lang="sass">
$black: #1F1F1F
$blue: #1789FC
$white: #ffffff
$grey: #777879

.slide-enter-active,
.slide-leave-active
  transition: all .3s ease

.slide-enter,
.slide-leave-active
  left: -100%

.nav
  position: fixed
  z-index: 99
  width: 100%
  height: 100px
  padding: 0 110px
  background: $white
  display: flex
  justify-content: space-between
  align-items: center
  box-shadow: 0px 3px 30px 0px rgba(31,31,31,0.29)
  &__media
    &-btn
      height: 60px
      width: 60px
      padding: 10px
      position: fixed
      top: 20px
      right: 30px
      z-index: 99
      background-color: $black
      &--img
        width: 100%
        height: 100%
    &-menu
      height: 70%
      width: 70%
      position: fixed
      top: 85px
      right: 30px
      z-index: 100
      display: flex
      flex-direction: column
      justify-content: space-between
      align-items: center
      background-color: $black
      transition: all 0.3s
      &-a
        color: $white
        font-weight: bold
        font-size: 25px
        text-decoration: none
        width: 100%
        height: 25%
        display: flex
        justify-content: center
        align-items: center
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
      text-decoration: none
      transition: .2s all
      &:hover
        color: $blue
        text-decoration: none
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
    text-decoration: none
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
  &-min
    position: fixed
    z-index: 100
    height: 200px
    width: 100px
    background-color: $blue

/*==========  Desktop First  ==========
/* Large Devices, Wide Screens
@media only screen and (max-width: 1200px)
  /**/

/* Medium Devices, Desktops
@media only screen and (max-width: 992px)
  /**/

/* Small Devices, Tablets
@media only screen and (max-width: 768px)
  .nav
    height: 60px
    padding: 0 30px
    display: flex
    justify-content: center
    align-items: center
    &__links
      width: 100%
  .nav__ava
    display: none
  .nav__lang
    display: none

/* Extra Small Devices, Phones
@media only screen and (max-width: 576px)
  .nav
    display: none
    &__media
    &-btn
      height: 60px
      width: 60px
      padding: 10px
      position: fixed
      top: 20px
      right: 30px
      z-index: 99
      background-color: $black
      &--img
        width: 100%
        height: 100%
    &-menu
      height: 70%
      width: 70%
      position: fixed
      top: 85px
      right: 30px
      z-index: 100
      display: flex
      flex-direction: column
      justify-content: space-between
      align-items: center
      background-color: $black
      transition: all 0.3s

/* Custom, iPhone Retina
@media only screen and (max-width: 320px)
  .nav
    display: none
    &__media
      &-btn
        height: 50px
        width: 50px
      &-menu
        top: 75px
        right: 30px

/*==========  Mobile First  ==========
/* Custom, iPhone Retina
@media only screen and (min-width: 320px)
  /**/

/* Extra Small Devices, Phones
@media only screen and (min-width: 576px)
  .nav__media-btn
    display: none
  .nav__media-menu
    display: none

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
