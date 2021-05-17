<template lang="pug">
  button.btn(:type='type' :disabled='disabled' :class='{loading: loading}')
    span {{text}}
    slot
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
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
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
    font-weight: bold
    color: #ffffff
    background: var(--color-primary)
    font-size: 0.9em
    padding: 0.4rem 0.6rem
    transition: all var(--animation-speed) var(--animation-curve)
    border: none !important
    border-radius: 0.2rem
    pointer-events: all
    cursor: pointer
    +shadow(3)
    span
      position: relative
    &:not(:disabled):hover
      +shadow(2)
    &:disabled
      background: var(--color-light-secondary)
      color: var(--color-disabled)
    &.succes
      background: var(--color-succes)
      color: var(--color-succes-text)
    &.loading
      span::after
        content: ''
        position: absolute
        left: 100%
        animation: loading calc(var(--animation-speed) * 6) var(--animation-curve) infinite
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
</style>
