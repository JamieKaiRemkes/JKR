<template lang="pug">
  .msg(:class='{stack: stackLayout}')
    .row(v-if='currentMsg' :key='currentMsg.text')
      .bubble
        .text
          span {{currentMsg.text}}
        .options
          .option(v-for='(option, i) in currentMsg.options' :key='i')
            Button(:text='option.text' :disabled='interactionDisabled' :borderless='true' @click.native='[option.callback(), nextMsg()]')
</template>

<script lang="js">
// type msg = {
//   text: string,
//   options: [
//     {
//       text: string,
//       callback: Function
//     }
//   ]
// }

import Vue from 'vue'
export default Vue.extend({
  name: 'Message',
  data () {
    return {
      que: [],
      animating: false,
      interactionDisabled: false
    }
  },
  computed: {
    currentMsg () {
      return this.que[0]?.text ? this.que[0] : null
    },
    currentColor () {
      return 'white'
    },
    stackLayout () {
      return this.currentMsg?.text.length >= 25
    }
  },
  created () {
    this.$nuxt.$on('msg', (msg) => {
      this.handleMsg(msg)
    })
  },
  methods: {
    handleMsg (msg) {
      this.que.push(msg)
    },
    nextMsg () {
      this.interactionDisabled = true
      if (this.que.length <= 1) {
        const oh = this.$el.offsetHeight
        this.$el.style.setProperty('--height', oh + 'px')
        this.$el.classList.add('colapse')
        setTimeout(() => {
          this.$el.style.setProperty('--height', 0 + 'px')
        }, 10)
        setTimeout(() => {
          this.$el.style.setProperty('--height', 'auto')
          this.que.shift()
          this.$el.classList.remove('colapse')
          this.interactionDisabled = false
          // this.$el.style.height = 'auto'
        }, 2000)
      } else {
        this.que.shift()
      }
    }
  }
})
</script>

<style lang="sass" scoped>
.msg
  transition: all var(--animation-speed) var(--animation-curve)
  height: var(--height)
  overflow: hidden
  &.stack
    +sm
      .row
        .bubble
          flex-direction: column !important
          justify-content: flex-start !important
          +pad
        .options
          margin-top: var(--ui-margin-y)
          margin-left: 0 !important
  &.colapse
    +animate(slide-out-up)
    .bubble
      overflow-y: auto
      background: transparent
      +shadow(0)
  .row
    height: 100%
    flex: 0 1
    display: flex
    flex-direction: column
    align-content: flex-start
    justify-content: center
    padding: 0.4rem 0
    transition: inherit
    padding-top: var(--ui-margin-y)
    +animate(slide-in-down)
    +padx
    +contain
    .bubble
      flex: 0 1 auto
      max-height: 100%
      display: flex
      flex-direction: row
      justify-content: center
      background: var(--color-light-secondary)
      border-radius: 0.4rem
      padding: 0.2rem
      overflow-y: scroll
      +padx
      +shadow(0.8)
      .text
        color: var(--color-dark)
        font-weight: bold
      .options
        display: flex
        flex-direction: row
        margin-left: var(--ui-margin-x)
        .option
          display: flex
          align-content: center
          justify-content: center
          margin-left: calc( var(--ui-margin-x) / 2 )
          &:first-of-type
            margin-left: 0

  .fadeHeight-enter-active, .fadeHeight-leave-active
    // transition: all 0.6s
    height: var(--height)

  .fadeHeight-enter, .fadeHeight-leave-to
    max-height: 0px
</style>
