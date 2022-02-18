<template lang="pug">
  //- Use dynamic vue components to render button or link
  component.btn(:is='componentType' :href='href' :type='type' :disabled='disabled' :class='{loading: loading, borderless: borderless, disabled: disabled}' @click='animateInteraction')
    span {{text}}
    slot
    .interactionfeedback
      .circle(v-for='circle in circles' :style="{ '--offset-x': circle.x + 'px', '--offset-y': circle.y + 'px'  }")
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: false,
      default: 'submit'
    },
    text: {
      type: String,
      required: false,
      default: 'Click'
    },
    href: {
      type: String,
      required: false,
      default: null
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    },
    borderless: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data () {
    return {
      circles: []
    }
  },
  computed: {
    componentType () {
      if (this.href) {
        return 'a'
      }
      return 'span'
    }
  },
  methods: {
    animateInteraction (e) {
      const cor = { x: e.offsetX, y: e.offsetY }
      this.circles.push(cor)
      setTimeout(() => {
        this.circles.shift()
      }, 2000)
    }
  }
}
</script>

<style lang="sass" scoped>
  .btn
    position: relative
    display: flex
    flex-direction: row
    align-items: center
    justify-content: center
    font-weight: var(--font-weight-bold) !important
    font-size: 0.85em !important
    text-decoration: underline
    color: var(--color-dark)
    background: transparent
    transition: all var(--animation-speed) var(--animation-curve)
    pointer-events: all
    cursor: pointer
    > *
      // disable all pointer events for correct cordinates
      pointer-events: none
    &:not(.borderless)
      text-decoration: none
      padding: 0.4rem 0.6rem
      border: 0.2rem solid currentColor !important
      border-radius: 0.2rem
      &:hover
        // border: 0.1rem solid var(--color-secondary) !important
    span
      color: currentColor
      font: inherit
      position: relative
    &.disabled
      user-select: none
      pointer-events: none
      color: var(--color-light-secondary)
      background: var(--color-light-secondary)
      span
        color: var(--color-dark-secondary)
      // color: red
    &.cta
      color: var(--color-primary)
    &.succes
      color: var(--color-succes)
    &.warn
      color: var(--color-warn)
    &.danger
      color: var(--color-danger)
    &.loading
      span::after
        content: ''
        position: absolute
        left: 100%
        animation: loading calc(var(--animation-speed) * 6) var(--animation-curve) infinite
    .interactionfeedback
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 0
      overflow: hidden
      .circle
        position: absolute
        top: calc(var(--offset-y) - 0.5rem)
        left: calc(var(--offset-x) - 0.5rem)
        height: 1rem
        width: 1rem
        background-color: currentColor
        border-radius: 100%
        animation: interaction calc(var(--animation-speed) * 3) var(--animation-curve) forwards
  @keyframes loading
    0%
      content: ''
    14.3%
      content: '.'
    28.6%
      content: '..'
    42.9%
      content: '...'
    57.2%
      content: '...'
    71.5%
      content: '..'
    85.8%
      content: '.'
    100%
      content: ''

  @keyframes interaction
    0%
      transform: scale(0)
      opacity: 0
    20%
      opacity: 0.5
    50%
      opacity: 0.65
    80%
      opacity: 0.1
    100%
      transform: scale(35)
      opacity: 0
</style>
