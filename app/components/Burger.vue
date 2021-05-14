<template lang="pug">
  .burger(:class='{closed: menuOpen}')
    .top
    .spacer
    .middle
    .spacer
    .bottom
</template>

<script>
export default {
  props: {
    menuOpen: {
      required: true,
      type: Boolean
    }
  }
}
</script>

<style lang="sass" scoped>
  .burger
    position: relative
    width: calc(var(--icon-size) * 0.85)
    height: calc(var(--icon-size) * 0.7)
    display: flex
    flex-direction: column
    *
      position: relative
      background: currentColor
      height: 20%
      transition: all var(--animation-speed) var(--animation-curve)
      transform: rotate(0deg)
      flex-grow: 1
      border-radius: 0.1rem
    .spacer
      background: none
    .top
      transform-origin: 50% 50%
    .middle
      transform-origin: 50% 50%
    .bottom
      transform-origin: 50% 50%
    &.closed
      .top
        transform: translateY(200%) rotate(45deg)
      .bottom
        transform: translateY(-200%) rotate(45deg)
      .middle
        transform: rotate(-45deg)
</style>
