<template lang="pug">
  #__page
    Header
    Nuxt.content
</template>

<script>
import Header from '~/components/Header.vue'

export default {
  components: {
    Header
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
  display: flex
  flex-direction: column
  overflow-y: auto
  overflow-x: hidden
  .content
    flex: 1 0 auto
    position: relative
    transform: translateX(0rem)
    transition: all var(--animation-speed) var(--animation-curve)
    padding: 0
    margin: 0
</style>
