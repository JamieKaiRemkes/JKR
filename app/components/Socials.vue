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
      position: relative
      align-self: end
      justify-content: left
      display: grid
      grid-auto-flow: row
      grid-gap: 1rem
      padding-top: var(--ui-margin-y)
      overflow: visible
      +animate(slide-in-up, 2)
      a
        flex: 0 0
      .icon
        justify-self: center
        color: var(--color-dark)
      .line
        height: 5rem
        width: 0.2rem
        background: var(--color-dark)
        align-self: center
        justify-self: center
</style>
