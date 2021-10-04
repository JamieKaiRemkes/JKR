<template lang="pug">
  .msg(:class='{stack: stackLayout, visible: (currentMsg && !interactionDisabled)}')
    .contain(v-if='currentMsg')
      .bubble(v-touch:swipe.up='nextMsg')
        Icon.s(v-if='currentMsg.icon' :name='currentMsg.icon')
        .text
          i18n(tag='span' :path='currentMsg.text')
            NuxtLink.fill(v-for='(fill, i) in currentMsg.fills' :key='i' :to='localePath(fill.to)') {{$t(fill.text)}}
        .options
          .option(v-for='(option, i) in currentMsg.options' :key='i')
            Button(:text='$t(option.text)' :disabled='interactionDisabled' :borderless='true' @click.native='[option.callback(), nextMsg()]')
</template>

<script lang="js">
// type msg = {
//   i18n: {
//     locale: {}
//   }
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
    stackLayout () {
      return this.$t(this.currentMsg?.text).length >= 20
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
      if (msg.i18n) {
        for (const [locale, messages] of Object.entries(msg.i18n)) {
          this.$i18n.setLocaleMessage(locale, messages)
        }
      }
    },
    async nextMsg () {
      await this.animate()
      this.que.shift()
    },
    animate () {
      return new Promise((resolve, reject) => {
        this.interactionDisabled = true
        const oh = this.$el.offsetHeight
        this.$el.style.setProperty('--height', oh + 'px')
        this.$el.classList.add('colapse')
        const speed = getComputedStyle(this.$el).getPropertyValue('--animation-speed')
        setTimeout(() => {
          this.$el.style.setProperty('--height', 0 + 'px')
        }, 10)
        setTimeout(() => {
          this.$el.style.setProperty('--height', 'auto')
          this.$el.classList.remove('colapse')
          this.interactionDisabled = false
          resolve()
        }, this.toMs(speed) * 3)
      })
    },
    toMs (s) {
      return parseFloat(s) * (/\ds$/.test(s) ? 1000 : 1)
    }
  }
})
</script>

<style lang="sass" scoped>
.msg
  transition: all var(--animation-speed) var(--animation-curve)
  height: var(--height)
  overflow: hidden
  &.visible
    overflow: unset
  &.stack
    +xs
      .contain
        .bubble
          grid-template-areas: 'icon .' 'text text' 'options options'
          +pad
  &.colapse
    +animate(slide-out-up)
    .bubble
      background: transparent
      +shadow(0)
  .contain
    flex: 0 0
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
      flex: 1 0 100%
      display: grid
      grid-gap:  0.4rem var(--ui-margin-x)
      grid-template-areas: 'icon text options'
      justify-content: center
      background: var(--color-light-secondary)
      border-radius: 0.4rem
      padding: 0.4rem
      +padx
      +shadow(0.2)
      .icon
        grid-area: icon
        align-self: center
        justify-self: center
      .text
        grid-area: text
        align-self: center
        justify-self: center
        *
          color: var(--color-dark)
          font-weight: bold
          font-size: 0.8rem
          text-decoration: none
        .fill
          color: var(--color-secondary)
      .options
        grid-area: options
        display: flex
        flex-direction: row
        .option
          display: flex
          align-content: center
          justify-content: center
          margin-left: calc( var(--ui-margin-x) / 2 )
          &:first-of-type
            margin-left: 0
</style>
