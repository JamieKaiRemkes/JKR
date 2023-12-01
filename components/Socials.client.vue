<i18n lang="yaml">
en:
  share_text: "Check out this cool page!"
nl:
  share_text: "Kijk eens naar deze coole pagina!"
</i18n>

<template lang="pug">
.socials
  Icon(v-if='shareButton && webShareEnabled' name='ui/share' @click.native='share')
  a(:href='githubLink' target='new')
    Icon(name='socials/github')
  a(:href='linkedinLink' target='new')
    Icon(name='socials/linkedin')
  .line
</template>

<script>
import Icon from '~/components/Icon.vue'

export default defineComponent({
  components: {
    Icon
  },
  props: {
    shareButton: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data() {
    return {
      githubLink: 'https://github.com/JamieKaiRemkes/JKR',
      linkedinLink: 'https://www.linkedin.com/in/jamie-kai-remkes/'
    }
  },
  computed: {
    webShareEnabled() {
      return !!navigator.share
    },
    shareData() {
      return {
        title: document.title,
        text: this.$t('share_text'),
        url: window.location.href
      }
    }
  },
  methods: {
    async share() {
      try {
        await navigator.share(this.shareData)
      } catch (err) {

      }
    }
  }
})
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
    border-radius: 0.2rem 0.2rem 0 0
    background: var(--color-dark)
    align-self: center
    justify-self: center
</style>
