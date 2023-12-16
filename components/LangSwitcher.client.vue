<template lang="pug">
.switcher
  NuxtLink(v-for='(locale, i) in locales' :key='i' :to='switchLocalePath(locale)' :style='{transform: translateY(i)}' :class='{ active: !!(currentLocale.value == locale) }')
    Icon(:name='`${locale}`')
</template>

<script setup lang="ts">
const i18n = useI18n()
const switchLocalePath = useSwitchLocalePath()

const locales = computed(() => {
  return i18n.availableLocales
})
const currentLocale = computed(() => {
  return i18n.locale
})

const translateY = (index: number) => {
  return `translateY(calc(-${index}rem - ${(index * 100)}%))`
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
    a
      transform: translateY(0%) !important
  a
    position: relative
    display: block
    transition: all var(--animation-speed) var(--animation-curve)
    border-radius: 100%
    &.active
      z-index: 10
    &:hover
      +shadow(1)
    // Add an after element to make hover work in between icons
    &::after
      content: ''
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 0
      transform: translateY(-100%)
</style>
