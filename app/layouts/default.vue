<template lang="pug">
  #__page
    Msg
    Header
      LangSwitcher.lang
    Nuxt.content
    CookieConsent
</template>

<script>
import Header from '~/components/Header.vue'
import LangSwitcher from '~/components/LangSwitcher.vue'

export default {
  name: 'DefaultLayout',
  components: {
    Header,
    LangSwitcher
  }
}
</script>

<style lang="sass">
html, body, #__nuxt
  position: fixed
  top: 0
  left: 0
  right: 0
  bottom: 0
  height: 100%
  width: 100%
  padding: 0
  margin: 0
  overflow: hidden
  background: var(--color-light)
#__layout
  position: absolute
  top: 0
  left: 0
  right: 0
  bottom: 0
#__page
  position: relative
  width: 100%
  height: 100%
  display: grid
  grid-auto-flow: row
  grid-template-areas: 'msg' 'header' 'content' 'consent'
  grid-template-rows: auto auto minmax(auto, 1fr) 0
  overflow-y: auto
  overflow-x: hidden
  .msg
    grid-area: msg
    z-index: 1000
  header
    grid-area: header
  .content
    grid-area: content
    flex: 1 0 100%
    position: relative
    transform: translateX(0rem)
    transition: all var(--animation-speed) var(--animation-curve)
    padding: 0
    margin: 0
  .cookie-consent
    grid-area: consent
</style>
