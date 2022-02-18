<template lang="pug">
  .switcher(v-if='!$auth.user')
    NuxtLink(v-for='(locale, i) in locales' :key='i' :to='switchLocalePath(locale.code)')
      Icon(:name='`flags/${locale.code}`' :class='{active: !!(currentLocale == locale.code)}' :style='{transform: translateY(i)}')
</template>

<script>
import Icon from '~/components/Icon.vue'

export default {
  components: {
    Icon
  },
  computed: {
    locales () {
      return this.$i18n.locales
    },
    currentLocale () {
      return this.$i18n.locale
    }
  },
  methods: {
    translateY (index) {
      return `translateY(calc(-${index}rem - ${(index * 100)}%))`
    }
  }
}
</script>

<style lang="sass">
  .switcher
    position: relative
    justify-self: center
    display: grid
    grid-auto-flow: row
    grid-gap: 1rem
    margin-left: var(--ui-margin-x)
    // Add padding to height so it stays round
    height: calc(var(--icon-size) + 0.4rem)
    z-index: 100
    overflow-y: visible
    // to get more hover area
    padding: 0.2rem
    // Prevent bad visibility while overlapping
    background: var(--color-light)
    border-radius: 100%
    // Reset transform to slide out all flags from behind current locale
    &:hover
      .icon
        transform: translateY(0%) !important
    .icon
      position: relative
      display: block
      transition: all var(--animation-speed) var(--animation-curve)
      // to get rid off small edges while overlapping
      border: solid 0.05rem var(--color-light)
      border-radius: 100%
      &.active
        z-index: 10
        &:hover
          +shadow(1)
      // Add an after element to make hover work inbetween icons
      &::after
        content: ''
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: 0
        transform: translateY(-100%)
</style>
