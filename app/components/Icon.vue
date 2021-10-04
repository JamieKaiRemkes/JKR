<template lang="pug">
   .icon(v-html="src")
</template>

<script>
export default {
  name: 'Icon',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    src () {
      const src = require(`~/assets/icons/${this.name}.svg?raw`)
      return src
    }
  }
}
</script>

<style lang="sass">
  .icon
    flex: 0 0 auto
    display: flex
    flex-direction: column
    height: var(--icon-size)
    width: var(--icon-size)
    &.s
      height: calc(var(--icon-size) * 0.8)
      width: calc(var(--icon-size) * 0.8)
    &.m
      height: calc(var(--icon-size) * 3)
      width: calc(var(--icon-size) * 3)
    &.l
      height: calc(var(--icon-size) * 8)
      width: calc(var(--icon-size) * 8)
    &.overwritefill
      svg *
        fill: currentColor
    svg
      flex: 1 0
      height: 100%
      width: 100%
      fill: currentColor !important
</style>
