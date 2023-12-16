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
    Icon(v-if='$colorMode.value == "dark"' name='moon' filled)
    Icon(v-else name='sun' filled)
    .automatic(v-if='$colorMode.preference == "system"')
      Icon(name='automatic' filled)
  .popup(:class='{active: showPopup}' v-click-outside="hidePopup")
    .options
      .option(v-for='(option, i) in options' :key='option.name+i' @click='option.callback')
        span {{ i18n.t(option.name) }}
</template>

<script lang="ts">
import { useI18n } from '#i18n';

const store = useLocalStore()
const colorMode = useColorMode()

export default defineComponent({
  setup () {
    const i18n = useI18n({
      useScope: "local",
    });

    return {
      i18n,
      store
    }
  },
  data () {
    return {
      showPopup: false,
      options: [
        {
          name: 'auto',
          callback: () => {
            colorMode.preference = 'system'
          }
        },
        {
          name: 'light',
          callback: () => {
            colorMode.preference = 'light'
          }
        },
        {
          name: 'dark',
          callback: () => {
            colorMode.preference = 'dark'
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
    z-index: 100
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
