<template lang="pug">
  .socials
    a(:href='githubLink' target='new')
      Icon(name='socials/github')
    a(:href='linkedinLink' target='new')
      Icon(name='socials/linkedin')
    .line
</template>

<script>
import Icon from '~/components/Icon.vue'

export default {
  components: {
    Icon
  },
  data () {
    return {
      githubLink: 'https://github.com/JamieKaiRemkes/JKR',
      linkedinLink: 'https://www.linkedin.com/in/jamie-kai-remkes/'
    }
  }
}
</script>

<style lang="sass" scoped>
    .socials
      position: absolute
      bottom: calc(-1 * var(--ui-margin-y))
      display: grid
      grid-auto-flow: row
      grid-gap: 1rem
      padding-left: var(--ui-margin-x)
      overflow: visible
      +animate(slide-in-up, 2)
      a
        flex: 0 0
      .icon
        justify-self: center
        color: var(--color-dark)
      .line
        height: calc(5rem + var(--ui-margin-y))
        width: 0.2rem
        background: var(--color-dark)
        align-self: center
        justify-self: center
</style>
