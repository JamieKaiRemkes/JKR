<i18n lang='yaml'>
  en:
    auto: "Auto"
    light: "Light"
    dark: "Dark"
  nl:
    auto: "Auto"
    light: "Licht"
    dark: "Donker"
</i18n>

<template lang="pug">
  .lightswitch(@click='showPopup = !showPopup' ref='lightSwitch')
    label
      Icon(v-if='$store.getters["localStorage/getDarkMode"]' name='ui/moon')
      Icon(v-else name='ui/sun')
      .automatic(v-if='$store.getters["localStorage/getSyncSystemDarkMode"]')
        Icon(name='ui/automatic')
    .popup(:class='{active: showPopup}' v-click-outside="{ exclude: ['lightSwitch'], handler: 'hidePopup' }")
      .options
        .option(v-for='(option, i) in options' :key='option.name+i' @click='option.callback')
          span {{ $t(option.name) }}
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
      showPopup: false,
      options: [
        {
          name: 'auto',
          callback: () => {
            this.$store.commit('localStorage/enableSyncSystemDarkMode')
          }
        },
        {
          name: 'light',
          callback: () => {
            this.$store.commit('localStorage/disableSyncSystemDarkMode')
            this.$store.commit('localStorage/disableDarkMode')
          }
        },
        {
          name: 'dark',
          callback: () => {
            this.$store.commit('localStorage/disableSyncSystemDarkMode')
            this.$store.commit('localStorage/enableDarkMode')
          }
        }
      ]
    }
  },
  methods: {
    hidePopup () {
      this.showPopup = false
    }
  }
})
</script>

<style lang="sass" scoped>
  .lightswitch
    position: relative
    align-self: center
    justify-self: start
    margin-right: var(--ui-margin-x)
    +animate(slide-in-down)
    .label
      height: var(--icon-size)
      width: var(--icon-size)
      background: var(--color-light-secondary)
    input
      display: none
    .automatic
      position: absolute
      bottom: -10px
      right: -10px
      transform: scale(0.7)
    .popup
      position: absolute
      top: 100%
      display: flex
      flex-direction: column
      transition: all var(--animation-speed) var(--animation-curve)
      opacity: 0
      pointer-events: none
      &.active
        opacity: 1
        pointer-events: all
      &::before
        content: ''
        align-self: start
        border-style: solid
        border-width: calc(0.5 * var(--icon-size))
        border-color: transparent transparent var(--color-light-secondary) transparent
      .options
        display: flex
        flex-direction: column
        padding: 0.4rem 0
        background: var(--color-light-secondary)
        .option
          padding: 0.4rem var(--ui-margin-x)
        span
          font-weight: bold
          text-transform: capitalize

</style>
